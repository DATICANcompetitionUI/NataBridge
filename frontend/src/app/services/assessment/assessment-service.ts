import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { AssessmentApi } from '../../models/assessment/Assessment.api';
import { Environment as environment } from '../../environment/environment';
import { finalize } from 'rxjs';
import { ApiResponse } from '../../models/api/ApiResponse';
import { AssessmentResultApi } from '../../models/assessment/Assessment-result.api';

@Service()
export class AssessmentService {
     private http = inject(HttpClient);

     readonly loading = signal<boolean>(false);
     readonly errorMessage = signal<string | null>(null);

     readonly result = signal<AssessmentResultApi | null>({
          prediction: "Low Risk",
          confidence: 0.5359,
          probabilities: {
               "Low Risk": 0.5359,
               "Mid Risk": 0.4429,
               "High Risk": 0.0212
          },
          topFactors: [
               {
                    "feature": "SystolicBP",
                    "impact": 0.4639
               },
               {
                    "feature": "Age",
                    "impact": -0.4192
               },
               {
                    "feature": "BS",
                    "impact": -0.2498
               }
          ],
          modelVersion: "1.0.0"
     });

     readonly userInput = signal<AssessmentApi | null>({
          age: 10,
          bloodSugar: 2,
          bodyTemp: 90,
          diastolicBP: 30,
          heartRate: 30,
          systolicBP: 60,
          dob: null,
          email: null,
          firstPregnancy: null,
          firstname: null,
          gestationalAge: null,
          lastname: null,
          middlename: null,
          phone: null,
          previousComplications: null
     });

     submitAssessment(assessmentData: AssessmentApi) {
          this.userInput.set(assessmentData);

          this.http
               .post<ApiResponse<AssessmentResultApi>>(`${environment.api}/assessments`, assessmentData)
               .pipe(finalize(() => this.loading.set(false)))
               .subscribe({
                    next: (resp) => {
                         this.result.set(resp.data);
                    },
                    error: (err) => this.errorMessage.set(err),
               });
     }
}
