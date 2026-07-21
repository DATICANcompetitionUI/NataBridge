import { Component } from '@angular/core';
import { DashboardNavBar } from "../../../components/nav-bars/dashboard-nav-bar/dashboard-nav-bar";
import { RouterModule } from "@angular/router";
import { PageLoader } from "../../../components/loaders/page-loader/page-loader";

@Component({
  selector: 'nata-template',
  imports: [DashboardNavBar, RouterModule, PageLoader],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {}
