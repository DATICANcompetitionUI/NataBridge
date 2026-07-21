import { inject, Service, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { UserApi } from '../../models/user/User.api';
import { Environment as environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../models/api/ApiResponse';
import { AuthCredentials } from '../../models/auth/Auth.ui';

@Service()
export class AuthService {
     private router = inject(Router);
     private http = inject(HttpClient);

     readonly loading = signal<boolean>(false);
     readonly errorMessage = signal<string | null>(null);
     readonly user = signal<UserApi | null>(null);
     readonly isUserAuthenticated = signal<boolean>(true);

     isUserCredentialsCorrect(id: string, password: string) {
          return id == "jane@natabridge.com" && password == "12345";
     }

     async login(authCredentials: AuthCredentials) {
          this.loading.set(true);

          // await fetch(`${environment.api}/users/login`, {
          //      method: 'post'
          // })
          
          // simple delay
          setTimeout(() => {
               // demo call
               if (this.isUserCredentialsCorrect(authCredentials.id, authCredentials.password)) {
                    this.isUserAuthenticated.set(true);

                    this.router.navigateByUrl('/dashboard');
               } else this.errorMessage.set("Wrong Credentials")

               this.loading.set(false)
          }, 2500);

          // api call 
          this.http
               .post<ApiResponse<UserApi>>(`${environment.api}/login`, authCredentials)
               .pipe(finalize(() => this.loading.set(false)))
               .subscribe({
                    next: (resp) => {
                         console.log(resp.data);
                    },
                    error: (err) => this.errorMessage.set(err),
               });
     }

     async logout() {
          // await this.auth.signOut();
          this.isUserAuthenticated.set(false)

          this.router.navigateByUrl('/auth');

          this.resetContext();
     }

     resetContext() {
          this.loading.set(false);
          this.errorMessage.set(null);
     }
}
