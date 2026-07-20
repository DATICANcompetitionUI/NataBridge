import { Component } from '@angular/core';
import { DashboardNavBar } from "../../../components/nav-bars/dashboard-nav-bar/dashboard-nav-bar";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'nata-template',
  imports: [DashboardNavBar, RouterModule],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {}
