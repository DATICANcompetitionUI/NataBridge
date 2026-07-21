import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { AssessmentApi } from '../../models/assessment/Assessment.api';
import { Environment as environment } from '../../environment/environment';
import { finalize } from 'rxjs';
import { ApiResponse } from '../../models/api/ApiResponse';
import { AssessmentResultApi } from '../../models/assessment/Assessment-result.api';
import { UtilService } from '../util/util-service';
import { Router } from '@angular/router';

@Service()
export class AssessmentService {
     private http = inject(HttpClient);
     private router = inject(Router);
     private utilService = inject(UtilService);

     readonly loading = signal<boolean>(false);
     readonly errorMessage = signal<string | null>(null);

     readonly result = signal<AssessmentResultApi | null>(
          JSON.parse(localStorage.getItem('assessment_result') || 'null')
     );
     readonly userInput = signal<AssessmentApi | null>(
          JSON.parse(localStorage.getItem('assessment_input') || 'null')
     );

     submitAssessment(assessmentData: AssessmentApi) {
          this.utilService.showLoader();
          this.userInput.set(assessmentData);
          localStorage.setItem('assessment_input', JSON.stringify(assessmentData));

          this.http
               .post<ApiResponse<AssessmentResultApi>>(`${environment.api}/assessments`, assessmentData)
               .pipe(finalize(() => this.utilService.hideLoader()))
               .subscribe({
                    next: (resp) => {
                         this.result.set(resp.data);

                         localStorage.setItem('assessment_result', JSON.stringify(resp.data));

                         this.router.navigateByUrl('assessment/result')
                    },
                    error: (err) => this.errorMessage.set(err),
               });
     }

     clearAssessmentStorage() {
          localStorage.removeItem('assessment_result');
          localStorage.removeItem('assessment_input');
          this.result.set(null);
          this.userInput.set(null);
     }
}
