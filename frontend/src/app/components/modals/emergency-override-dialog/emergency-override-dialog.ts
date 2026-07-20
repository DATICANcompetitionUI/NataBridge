import { Component } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { fluentWarning } from '@ng-icons/fluent-ui';

@Component({
  selector: 'nata-emergency-override-dialog',
  imports: [NgIcon],
  templateUrl: './emergency-override-dialog.html',
  styleUrl: './emergency-override-dialog.css',
  viewProviders: [provideIcons({
    fluentWarning
  })]
})
export class EmergencyOverrideDialog {}
