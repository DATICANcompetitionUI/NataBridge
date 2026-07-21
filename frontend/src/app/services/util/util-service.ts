import { Service, signal } from '@angular/core';

@Service()
export class UtilService {
     pageLoading = signal<boolean>(false);

     showLoader() {
          this.pageLoading.set(true);
     }
     
     hideLoader() {
          this.pageLoading.set(false);
     }
}
