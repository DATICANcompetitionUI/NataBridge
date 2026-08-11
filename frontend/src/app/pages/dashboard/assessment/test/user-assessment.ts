import { Component, inject, input } from '@angular/core';
import { AssessmentTest } from '../../../../components/assessment/test/assessment-test';
import { AuthService } from '../../../../services/auth/auth-service';

@Component({
  selector: 'nata-user-assessment',
  imports: [AssessmentTest],
  templateUrl: './user-assessment.html',
  styleUrl: './user-assessment.css',
})
export class UserAssessment {
  private authService = inject(AuthService);

  userAuthenticated = this.authService.isUserAuthenticated;
  readonly patientId = input<string | null>(null);
}
