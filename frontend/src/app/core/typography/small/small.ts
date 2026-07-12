import { Component } from '@angular/core';
import { hlmSmall } from '@spartan-ng/helm/typography';

@Component({
  selector: 'nata-small',
  imports: [],
  templateUrl: './small.html',
  styleUrl: './small.css',
})
export class Small {
  style = hlmSmall;
}
