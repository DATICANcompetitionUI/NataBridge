import { Component, computed, inject } from '@angular/core';
import { DashboardService } from '../../../services/dashboard/dashboard-service';
import { DashboardAssessment } from '../../../models/dashboard/dashboard.api';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'nata-home',
  imports: [RouterModule, DatePipe, MatTableModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  dashboardService = inject(DashboardService);
  name = "jane"

  assessmentDetails = computed(() => {
      return this.dashboardService.assessmentDetails() ?? {
        high: 0,
        mid: 0,
        low: 0
      };
    });

  totalAssessments = computed(() => {
      const details = this.assessmentDetails();

      return (
        details.high + details.mid + details.low
      );
    });

  priorityDataSource = new MatTableDataSource<DashboardAssessment>([]);

  recentDataSource =
    new MatTableDataSource<DashboardAssessment>([]);

  priorityDisplayedColumns = [
    'patient',
    'age',
    'gestationalAge',
    'risk',
    'lastAssessment',
    'action'
  ];

  recentDisplayedColumns = [
    'patient',
    'age',
    'gestationalAge',
    'risk',
    'lastAssessment',
    'action'
  ];

  ngOnInit(): void {
    this.loadDashboard();
  }

  private loadDashboard(): void {
    this.dashboardService.getDashboardDetails();

    const dashboard = this.dashboardService.dashboardDetails;


    const interval = setInterval(() => {
        const data = dashboard();

        if (!data) return;
        

        this.priorityDataSource.data =
          data.priorityAssessments;

        this.recentDataSource.data =
          data.recentAssessments;

        clearInterval(interval);
      }, 50);
  }

}
