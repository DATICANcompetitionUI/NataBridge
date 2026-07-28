import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PatientApi } from '../../models/patient/Patient.api';
import { ApiResponse } from '../../models/api/ApiResponse';
import { Environment as environment } from '../../environment/environment';
import { finalize } from 'rxjs';

@Service()
export class PatientService {
     private http = inject(HttpClient);

     readonly loading = signal<boolean>(false);
     readonly errorMessage = signal<string | null>(null);
     readonly patient = signal<PatientApi | null>(null);
     readonly patients = signal<PatientApi[]>([]);

     async getPatients() {
          this.loading.set(true);

          this.http
               .get<ApiResponse<PatientApi[]>>(`${environment.api}/patients`, {
                    withCredentials: true
               })
               .pipe(finalize(() => this.loading.set(false)))
               .subscribe({
                    next: (resp) => {
                         this.patients.set(resp.data)
                    },
                    error: (err) => this.errorMessage.set(err),
               });
     }

     async getPatient(patientId: string) {
          this.loading.set(true);

          this.http
               .get<ApiResponse<PatientApi>>(`${environment.api}/patients/${patientId}`, {
                    withCredentials: true
               })
               .pipe(finalize(() => this.loading.set(false)))
               .subscribe({
                    next: (resp) => {
                         this.patient.set(resp.data)
                    },
                    error: (err) => this.errorMessage.set(err),
               });
     }
}
