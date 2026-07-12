import { Component } from '@angular/core';
import { hlmH3 } from '@spartan-ng/helm/typography';

@Component({
  selector: 'nata-h3',
  imports: [],
  templateUrl: './h3.html',
  styleUrl: './h3.css',
})
export class H3 {
  style = hlmH3;
}
