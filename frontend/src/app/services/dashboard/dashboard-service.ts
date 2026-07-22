import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Environment as environment } from '../../environment/environment';
import { DashboardResponse } from '../../models/dashboard/dashboard.api';
import { finalize } from 'rxjs';
import { ApiResponse } from '../../models/api/ApiResponse';

@Service()
export class DashboardService {
     private http = inject(HttpClient);

     readonly loading = signal<boolean>(false);
     readonly errorMessage = signal<string | null>(null);

     readonly dashboardDetails = signal<DashboardResponse | null>(null);
     readonly assessmentDetails = signal<{
          high: number,
          mid: number,
          low: number
     } | null>(null);


     async getDashboardDetails() {
          this.loading.set(true);

          this.http
               .get<ApiResponse<DashboardResponse>>(`${environment.api}/dashboard`, {
                    withCredentials: true
               })
               .pipe(finalize(() => this.loading.set(false)))
               .subscribe({
                    next: (resp) => {
                         this.dashboardDetails.set(resp.data)

                         this.assessmentDetails.set(resp.data.summary)
                    },
                    error: (err) => this.errorMessage.set(err),
               });
     }
}
