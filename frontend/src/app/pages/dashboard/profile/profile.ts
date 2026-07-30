import { Component, inject, input, OnInit, signal } from '@angular/core';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideEdit3 } from '@ng-icons/lucide';
import { PatientService } from '../../../services/patient/patient-service';
import { Router } from '@angular/router';

@Component({
  selector: 'nata-profile',
  imports: [NgIcon],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  viewProviders: [
    provideIcons({
      lucideEdit3
    })
  ]
})
export class Profile implements OnInit {
  id = input<string | null>();
  profileType = input<'user' | 'patient'>();
  router = inject(Router);
  patientService = inject(PatientService);

  isPatient() {
    return this.profileType() === 'patient'
  }

  async ngOnInit() {
    if(this.isPatient() && this.id() === null){
      this.router.navigateByUrl('dashboard')
      return
    }

    const patientId = this.id()! 
    if(patientId)
      this.patientService.getPatient(patientId);
  }

  user = signal<{
    age: number;
    name: string
  }>({
    age: 25,
    name: "james samuel"
  });
}
