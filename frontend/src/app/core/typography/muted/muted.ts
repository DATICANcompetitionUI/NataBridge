import { Component } from '@angular/core';
import { hlmMuted } from '@spartan-ng/helm/typography';

@Component({
  selector: 'nata-muted',
  imports: [],
  templateUrl: './muted.html',
  styleUrl: './muted.css',
})
export class Muted {
  style = hlmMuted;
}
