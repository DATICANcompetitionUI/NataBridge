import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardAssessment } from '../../../models/dashboard/dashboard.api';
import { DashboardService } from '../../../services/dashboard/dashboard-service';

type RiskTone = 'high' | 'mid' | 'low';

interface CriticalAlertView {
  name: string;
  detail: string;
}

interface RecentAssessmentView {
  name: string;
  vitals: string;
  risk: string;
  riskTone: RiskTone;
  assessed: string;
}

const fallbackAlerts: CriticalAlertView[] = [
  { name: 'Amina Bello', detail: 'BP 158/106 mmHg' },
  { name: 'Chioma Okafor', detail: 'Temperature 38.4 °C' },
  { name: 'Fatima Musa', detail: 'Blood sugar 9.1 mmol/L' },
];

const fallbackRecentAssessments: RecentAssessmentView[] = [
  {
    name: 'Amina Bello',
    vitals: '158/106 · 108 bpm',
    risk: 'High risk',
    riskTone: 'high',
    assessed: 'Today, 1:24 PM',
  },
  {
    name: 'Blessing Eze',
    vitals: '134/86 · 91 bpm',
    risk: 'Mid risk',
    riskTone: 'mid',
    assessed: 'Today, 12:48 PM',
  },
];

@Component({
  selector: 'nata-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly dashboardService = inject(DashboardService);

  readonly name = 'Jane';
  readonly patientsMonitored = 248;
  readonly communitiesMonitored = 6;

  readonly assessmentDetails = computed(
    () =>
      this.dashboardService.assessmentDetails() ?? {
        high: 18,
        mid: 10,
        low: 8,
      },
  );

  readonly totalAssessments = computed(() => {
    const details = this.assessmentDetails();
    return details.high + details.mid + details.low;
  });

  readonly pendingReferrals = computed(() => {
    const dashboard = this.dashboardService.dashboardDetails();

    if (!dashboard) return 7;

    return dashboard.priorityAssessments.filter(
      (assessment) => this.riskTone(assessment.currentRiskLevel) === 'high',
    ).length;
  });

  readonly criticalAlerts = computed<CriticalAlertView[]>(() => {
    const assessments = this.dashboardService.dashboardDetails()?.priorityAssessments ?? [];

    if (!assessments.length) return fallbackAlerts;

    return assessments.slice(0, 3).map((assessment) => ({
      name: assessment.name,
      detail: this.alertDetail(assessment),
    }));
  });

  readonly recentAssessments = computed<RecentAssessmentView[]>(() => {
    const assessments = this.dashboardService.dashboardDetails()?.recentAssessments ?? [];

    if (!assessments.length) return fallbackRecentAssessments;

    return assessments.slice(0, 4).map((assessment) => {
      const riskTone = this.riskTone(assessment.currentRiskLevel);

      return {
        name: assessment.name,
        vitals: `${assessment.systolicBP}/${assessment.diastolicBP} · ${assessment.heartRate} bpm`,
        risk: `${riskTone === 'mid' ? 'Mid' : riskTone[0].toUpperCase() + riskTone.slice(1)} risk`,
        riskTone,
        assessed: this.assessedAt(assessment.lastAssessment),
      };
    });
  });

  ngOnInit() {
    void this.dashboardService.getDashboardDetails();
  }

  private riskTone(risk: string): RiskTone {
    const normalizedRisk = risk.toLowerCase();

    if (normalizedRisk.includes('high')) return 'high';
    if (normalizedRisk.includes('mid') || normalizedRisk.includes('medium')) return 'mid';

    return 'low';
  }

  private alertDetail(assessment: DashboardAssessment) {
    if (assessment.systolicBP >= 140 || assessment.diastolicBP >= 90) {
      return `BP ${assessment.systolicBP}/${assessment.diastolicBP} mmHg`;
    }

    if (assessment.bodyTemperatureCelsius >= 38) {
      return `Temperature ${assessment.bodyTemperatureCelsius.toFixed(1)} °C`;
    }

    if (assessment.bloodSugar >= 7.8) {
      return `Blood sugar ${assessment.bloodSugar.toFixed(1)} mmol/L`;
    }

    return `Heart rate ${assessment.heartRate} bpm`;
  }

  private assessedAt(value: string) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return value;

    const time = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();

    if (isToday) return `Today, ${time}`;

    const day = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);

    return `${day}, ${time}`;
  }
}
