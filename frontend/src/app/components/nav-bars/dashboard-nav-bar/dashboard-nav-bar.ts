import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { hugeLogout01 } from '@ng-icons/huge-icons';
import { AuthService } from '../../../services/auth/auth-service';
import { MatDialog } from '@angular/material/dialog';
import { Logout } from '../../modals/logout/logout';
import {lucideClipboardCheck, lucideHouse, lucideUsersRound} from '@ng-icons/lucide'

@Component({
  selector: 'nata-dashboard-nav-bar',
  imports: [NgIcon, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-nav-bar.html',
  styleUrl: './dashboard-nav-bar.css',
  providers: [provideIcons({
    hugeLogout01, lucideClipboardCheck, lucideUsersRound, lucideHouse
  })]
})
export class DashboardNavBar {
  router = inject(RouterModule);
  authService = inject(AuthService);
  readonly dialog = inject(MatDialog);
  
  logout() {
    const dialogRef = this.dialog.open(Logout);

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.authService.logout();
    })
  }

  @Output() navClicked = new EventEmitter<boolean>();

  toggleSidebar() {
    this.navClicked.emit(true);
  }
}
