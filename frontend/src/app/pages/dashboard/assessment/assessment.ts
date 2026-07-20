import { Component, input } from '@angular/core';
import { AssessmentTest } from "../../../components/assessment/test/assessment-test";

@Component({
  selector: 'nata-assessment',
  imports: [AssessmentTest],
  templateUrl: './assessment.html',
  styleUrl: './assessment.css',
})
export class Assessment {
  userAuthenticated = input<boolean>(true);

}
