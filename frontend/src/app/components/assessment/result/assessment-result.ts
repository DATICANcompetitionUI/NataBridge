import { Component, computed, inject, input, Signal } from '@angular/core';
import { H3 } from "../../../core/typography/h3/h3";
import { AssessmentResultApi } from '../../../models/assessment/Assessment-result.api';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgStyle } from '@angular/common';
import { AssessmentApi } from '../../../models/assessment/Assessment.api';
import { DecimalPipe } from '@angular/common';
import { AssessmentService } from '../../../services/assessment/assessment-service';

interface FactorRow {
  vital: string;
  currentValue: string | number;
  influence: number;
  progress: number;
}


@Component({
  selector: 'nata-assessment-result',
  imports: [H3, NgStyle, MatProgressSpinnerModule, MatTableModule, MatProgressBarModule, DecimalPipe],
  templateUrl: './assessment-result.html',
  styleUrl: './assessment-result.css',
})
export class AssessmentResult {
  userInput = input<AssessmentApi | null>(null);
  result = input<AssessmentResultApi | null>(null);
  styles = input<{
    background: string;
    border: string;
    text: string;
    badge: string;
  } | null>(null);

  confidencePercent = computed(() => {
    const result = this.result();

    if (!result) return '--';

    return (result.confidence * 100).toFixed(1)
  })

  displayedColumns: string[] = [
    'vital',
    'currentValue',
    'influence',
    'progress'
  ];

  dataSource = new MatTableDataSource<FactorRow>();
  ngOnInit() {
    const result = this.result();
    const userInput = this.userInput();

    console.log(userInput);
    console.log(result);
    
    if (!userInput || !result) return;
    const input = {
      Age: userInput.age,
      SystolicBP: userInput.systolicBP,
      DiastolicBP: userInput.diastolicBP,
      BS: userInput.bloodSugar,
      BodyTemp: userInput.bodyTemp,
      HeartRate: userInput.heartRate
    }

    const maxImpact = Math.max(
      ...result.topFactors.map(f => Math.abs(f.impact))
    );

    this.dataSource.data = result.topFactors.map(factor => ({
      vital: this.formatFeatureName(factor.feature),
      currentValue: input[
        factor.feature as keyof typeof input
      ],
      influence: factor.impact,
      progress: (Math.abs(factor.impact) / maxImpact) * 100
    }));
  }

  formatFeatureName(feature: string): string {
    const map: Record<string, string> = {
      Age: 'Age',
      SystolicBP: 'Systolic Blood Pressure',
      DiastolicBP: 'Diastolic Blood Pressure',
      BS: 'Blood Sugar',
      BodyTemp: 'Body Temperature',
      HeartRate: 'Heart Rate'
    };

    return map[feature] ?? feature;
  }
}
