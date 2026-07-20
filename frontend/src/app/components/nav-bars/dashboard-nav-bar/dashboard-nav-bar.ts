import { Component, inject } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { hugeLogout01 } from '@ng-icons/huge-icons';

@Component({
  selector: 'nata-dashboard-nav-bar',
  imports: [NgIcon, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-nav-bar.html',
  styleUrl: './dashboard-nav-bar.css',
  providers: [provideIcons({
    hugeLogout01
  })]
})
export class DashboardNavBar {
  router = inject(RouterModule);
  
}
