import { Component, inject } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UtilService } from '../../../services/util/util-service';

@Component({
  selector: 'nata-page-loader',
  imports: [MatProgressSpinnerModule],
  templateUrl: './page-loader.html',
  styleUrl: './page-loader.css',
})
export class PageLoader {
  utilService = inject(UtilService);

  readonly pageLoading = this.utilService.pageLoading;
}
