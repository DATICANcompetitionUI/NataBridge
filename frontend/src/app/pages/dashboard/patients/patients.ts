import { Component, computed, inject, OnInit, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { hugePlusSign } from '@ng-icons/huge-icons';
import { PatientService } from '../../../services/patient/patient-service';
import { PatientApi } from '../../../models/patient/Patient.api';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Sort, MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'nata-patients',
  imports: [NgIcon, MatPaginatorModule, MatSortModule, MatTableModule, MatProgressSpinnerModule, DatePipe],
  templateUrl: './patients.html',
  styleUrl: './patients.css',
  providers: [provideIcons({
    hugePlusSign
  })]
})
export class Patients implements OnInit {
  private patientService = inject(PatientService);
  readonly loading = this.patientService.loading;

  ngOnInit(): void {
    this.patientService.getPatients();
  }

  ngAfterViewInit(): void {
    this.dataSource().paginator = this.paginator;
    this.dataSource().sort = this.sort;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  readonly displayedColumns: string[] = [
    'name',
    'id',
    'age',
    'gestationalAge',
    'lastAssessment',
    'currentRiskLevel'
  ];

  readonly dataSource = computed(() => {
    const patients = this.patientService.patients();

    return new MatTableDataSource<PatientApi>(patients);
  })
    // new MatTableDataSource<PatientApi>([]);

  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    const datasource = this.dataSource();

    this.dataSource().filter =
      input.value.trim().toLowerCase();

    if (datasource.paginator) {
      this.dataSource().paginator?.firstPage();
    }
  }
}
