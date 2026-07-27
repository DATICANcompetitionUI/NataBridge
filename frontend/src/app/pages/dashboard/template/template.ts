import { Component, inject, signal } from '@angular/core';
import { DashboardNavBar } from "../../../components/nav-bars/dashboard-nav-bar/dashboard-nav-bar";
import { Router, RouterModule } from "@angular/router";
import { PageLoader } from "../../../components/loaders/page-loader/page-loader";
import { AuthService } from '../../../services/auth/auth-service';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { hugeMenu02, hugeMinusSign, hugeNotification01 } from '@ng-icons/huge-icons';

@Component({
  selector: 'nata-template',
  imports: [DashboardNavBar, PageLoader, RouterModule, NgIcon],
  templateUrl: './template.html',
  styleUrl: './template.css',
  viewProviders: [
    provideIcons({
      hugeMenu02, hugeNotification01, hugeMinusSign
    })
  ]
})
export class Template {
  router = inject(Router);
  authService = inject(AuthService);

  constructor() {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigateByUrl('/auth');
    }
  }

  isNavBarOpened = signal<boolean>(false);
  openNavBar() {
    this.isNavBarOpened.set(true);
  }
  closeNavBar() {
    this.isNavBarOpened.set(false);
  }

  closeSideBar(navClicked: boolean) {
    if(navClicked) this.closeNavBar();
  }
}
