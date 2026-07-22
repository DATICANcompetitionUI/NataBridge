import { Component, inject } from '@angular/core';
import { DashboardNavBar } from "../../../components/nav-bars/dashboard-nav-bar/dashboard-nav-bar";
import { Router, RouterModule } from "@angular/router";
import { PageLoader } from "../../../components/loaders/page-loader/page-loader";
import { AuthService } from '../../../services/auth/auth-service';

@Component({
  selector: 'nata-template',
  imports: [DashboardNavBar, PageLoader, RouterModule],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {
  router = inject(Router);
  authService = inject(AuthService);

  constructor() {
    if (!this.authService.isUserAuthenticated()) {
      this.router.navigateByUrl('/auth');
    }
  }
}
