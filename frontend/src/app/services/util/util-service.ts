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

     getStoredData<T>(key: string): T | null {
          const value = localStorage.getItem(key);

          if (!value || value === 'undefined') {
               return null;
          }

          try {
               return JSON.parse(value) as T;
          } catch {
               localStorage.removeItem(key);
               return null;
          }
     }
}
