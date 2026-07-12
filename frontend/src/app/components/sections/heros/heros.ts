import { Component } from '@angular/core';
import { H1 } from "../../../core/typography/h1/h1";
import { hlmH2 } from '@spartan-ng/helm/typography';

@Component({
  selector: 'nata-heros',
  imports: [H1],
  templateUrl: './heros.html',
  styleUrl: './heros.css',
})
export class Heros {
  style = hlmH2;
}
