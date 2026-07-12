import { Component } from '@angular/core';
import { hlmH1 } from '@spartan-ng/helm/typography';

@Component({
  selector: 'h1[nata-h1]',
  imports: [],
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'style',
  }
})
export class H1 {
  style = hlmH1;
}
