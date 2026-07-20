import { Component, computed, inject } from '@angular/core';
import { TestNavBar } from "../../components/nav-bars/test-nav-bar/test-nav-bar";
import { AssessmentResult } from "../../components/assessment/result/assessment-result";
import { AssessmentService } from '../../services/assessment/assessment-service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'nata-quick-test-result',
  imports: [TestNavBar, AssessmentResult, NgStyle],
  templateUrl: './quick-test-result.html',
  styleUrl: './quick-test-result.css',
})
export class QuickTestResult {
  private assessmentService = inject(AssessmentService);
  
  readonly result = this.assessmentService.result.asReadonly();
  readonly input = this.assessmentService.userInput.asReadonly();

  readonly riskColor = computed(() => {
    const riskClass = this.result()?.prediction.split(' ')[0].toLowerCase();

    switch (riskClass) {
      case "low":
        return {
          background: '#ECFDF5',
          border: '#A7F3D0',
          text: '#065F46',
          badge: '#10B981'
        }
      case "mid":
        return {
          background: '#FFFBEB',
          border: '#FCD34D',
          text: '#92400E',
          badge: '#F59E0B'
        }
      case "high":
        return {
          background: '#FEF2F2',
          border: '#FCA5A5',
          text: '#991B1B',
          badge: '#EF4444'
        }
      default: 
      return {
        background: '#ECFDF5',
          border: '#A7F3D0',
          text: '#065F46',
          badge: '#10B981'
      }
    }
  })
}
