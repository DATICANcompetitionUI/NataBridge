import { Component } from '@angular/core';
import { hlmP } from '@spartan-ng/helm/typography';


@Component({
  selector: 'nata-p',
  imports: [],
  templateUrl: './p.html',
  styleUrl: './p.css',
})
export class P {
  style = hlmP;
}
