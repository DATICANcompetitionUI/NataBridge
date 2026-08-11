import { Component, inject } from '@angular/core';
import { TestNavBar } from '../../components/nav-bars/test-nav-bar/test-nav-bar';
import { AssessmentResult } from '../../components/assessment/result/assessment-result';
import { AssessmentService } from '../../services/assessment/assessment-service';

@Component({
  selector: 'nata-quick-test-result',
  imports: [TestNavBar, AssessmentResult],
  templateUrl: './quick-test-result.html',
  styleUrl: './quick-test-result.css',
})
export class QuickTestResult {
  private readonly assessmentService = inject(AssessmentService);

  readonly result = this.assessmentService.result.asReadonly();
  readonly input = this.assessmentService.userInput.asReadonly();
}
