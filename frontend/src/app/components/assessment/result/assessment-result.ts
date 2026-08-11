import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { AssessmentResultApi } from '../../../models/assessment/Assessment-result.api';
import { AssessmentApi } from '../../../models/assessment/Assessment.api';
import { AuthService } from '../../../services/auth/auth-service';

type RiskTone = 'high' | 'mid' | 'low';

interface FactorRow {
  vital: string;
  currentValue: string;
  influence: string;
  positive: boolean;
  progress: number;
}

interface VitalCard {
  label: string;
  value: string;
  alert: boolean;
}

@Component({
  selector: 'nata-assessment-result',
  imports: [],
  templateUrl: './assessment-result.html',
  styleUrl: './assessment-result.css',
})
export class AssessmentResult {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly userInput = input<AssessmentApi | null>(null);
  readonly result = input<AssessmentResultApi | null>(null);
  readonly isAuthenticated = this.authService.isUserAuthenticated;

  readonly riskLabel = computed(() => {
    const risk = this.result()?.prediction.risk.trim();

    if (!risk) return 'Risk unavailable';

    return risk.charAt(0).toUpperCase() + risk.slice(1).toLowerCase();
  });

  readonly riskTone = computed<RiskTone>(() => {
    const risk = this.result()?.prediction.risk.toLowerCase() ?? '';

    if (risk.includes('high')) return 'high';
    if (risk.includes('mid') || risk.includes('medium')) return 'mid';

    return 'low';
  });

  readonly confidencePercent = computed<number | null>(() => {
    const confidence = this.result()?.prediction.confidence;

    if (confidence === undefined || !Number.isFinite(confidence)) return null;

    return Math.round(Math.min(1, Math.max(0, confidence)) * 100);
  });

  readonly patientName = computed(() => {
    const patient = this.userInput();
    const name = [patient?.firstname, patient?.lastname]
      .filter((part): part is string => Boolean(part?.trim()))
      .join(' ');

    return name || 'Patient';
  });

  readonly patientMeta = computed(() => {
    const patient = this.userInput();
    const details = [this.patientName()];

    if (patient?.age !== null && patient?.age !== undefined) {
      details.push(`${patient.age} years`);
    }

    details.push('Assessment complete');

    return details.join('  ·  ');
  });

  readonly riskGuidance = computed(() => {
    switch (this.riskTone()) {
      case 'high':
        return 'Immediate clinical review recommended';
      case 'mid':
        return 'Timely clinical follow-up recommended';
      default:
        return 'Continue routine monitoring';
    }
  });

  readonly factorRows = computed<FactorRow[]>(() => {
    const factors = this.result()?.prediction.topFactors ?? [];
    const patient = this.userInput();
    const values: Record<string, number | null | undefined> = {
      Age: patient?.age,
      SystolicBP: patient?.systolicBP,
      DiastolicBP: patient?.diastolicBP,
      BS: patient?.bloodSugar,
      BodyTemp: patient?.bodyTemp,
      HeartRate: patient?.heartRate,
    };
    const maxImpact = Math.max(0, ...factors.map((factor) => Math.abs(factor.impact)));

    return factors.map((factor) => ({
      vital: this.formatFeatureName(factor.feature),
      currentValue: this.formatFeatureValue(factor.feature, values[factor.feature]),
      influence: `${factor.impact > 0 ? '+' : ''}${factor.impact.toFixed(3)}`,
      positive: factor.impact > 0,
      progress: maxImpact > 0 ? (Math.abs(factor.impact) / maxImpact) * 100 : 0,
    }));
  });

  readonly recommendations = computed(() => {
    const recommendations = this.result()?.prediction.recommendations ?? [];
    const entries = this.authService.isUserAuthenticated()
      ? recommendations.flatMap((item) => item.actions)
      : recommendations.flatMap((item) => item.counselling);

    return [...new Set(entries.filter((entry) => entry.trim()))];
  });

  readonly clinicalInterpretations = computed<string[]>(() => {
    const conditions =
      this.result()
        ?.prediction.recommendations.map((item) => item.condition.trim())
        .filter(Boolean) ?? [];
    const uniqueConditions = [...new Set(conditions)];

    if (uniqueConditions.length) return uniqueConditions;

    return [
      'The model did not return a detailed clinical interpretation. Review the patient’s measurements and recommendations with a qualified healthcare professional.',
    ];
  });

  readonly patientVitals = computed<VitalCard[]>(() => {
    const patient = this.userInput();

    return [
      {
        label: 'Systolic',
        value: this.formatNumber(patient?.systolicBP),
        alert: this.riskTone() === 'high',
      },
      {
        label: 'Diastolic',
        value: this.formatNumber(patient?.diastolicBP),
        alert: this.riskTone() === 'high',
      },
      {
        label: 'Heart rate',
        value: this.formatNumber(patient?.heartRate),
        alert: false,
      },
      {
        label: 'Temperature',
        value:
          patient?.bodyTemp === null || patient?.bodyTemp === undefined
            ? '—'
            : `${patient.bodyTemp}°`,
        alert: false,
      },
    ];
  });

  readonly escalationMessage = computed(() => {
    if (this.riskTone() !== 'high') return null;

    const patient = this.userInput();
    if ((patient?.systolicBP ?? 0) >= 140 || (patient?.diastolicBP ?? 0) >= 90) {
      return 'Near-emergency blood pressure detected. Confirm manually and prepare referral.';
    }

    return 'High-risk assessment detected. Confirm measurements manually and follow the recommended clinical pathway.';
  });

  goBack() {
    if (history.length > 1) {
      history.back();
      return;
    }

    const fallback = this.authService.isUserAuthenticated() ? '/dashboard/patients' : '/assessment';

    this.router.navigateByUrl(fallback);
  }

  printReport() {
    window.print();
  }

  private formatFeatureName(feature: string): string {
    const names: Record<string, string> = {
      Age: 'Age',
      SystolicBP: 'Systolic blood pressure',
      DiastolicBP: 'Diastolic blood pressure',
      BS: 'Blood sugar',
      BodyTemp: 'Body temperature',
      HeartRate: 'Heart rate',
    };

    return names[feature] ?? feature;
  }

  private formatFeatureValue(feature: string, value: number | null | undefined): string {
    if (value === null || value === undefined) return '—';

    const units: Record<string, string> = {
      Age: ' years',
      SystolicBP: ' mmHg',
      DiastolicBP: ' mmHg',
      BS: ' mmol/L',
      BodyTemp: ' °C',
      HeartRate: ' bpm',
    };

    return `${value}${units[feature] ?? ''}`;
  }

  private formatNumber(value: number | null | undefined): string {
    return value === null || value === undefined ? '—' : `${value}`;
  }
}
