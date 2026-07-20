import { Component, inject, input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AssessmentApi } from '../../../models/assessment/Assessment.api';
import { AssessmentService } from '../../../services/assessment/assessment-service';
import { AcknowledgementDialog } from '../../modals/acknowledgement-dialog/acknowledgement-dialog';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { MatStepperModule } from "@angular/material/stepper";
import { heroArrowLongRight, heroSlash } from '@ng-icons/heroicons/outline';
import { EmergencyOverrideDialog } from '../../modals/emergency-override-dialog/emergency-override-dialog';

@Component({
  selector: 'nata-assessment-test',
  imports: [NgIcon, MatStepperModule, ReactiveFormsModule, MatDialogModule ],
  templateUrl: './assessment-test.html',
  styleUrl: './assessment-test.css',
  viewProviders: [provideIcons({ heroArrowLongRight, heroSlash })]
})
export class AssessmentTest {
  readonly dialog = inject(MatDialog);
  private assessmentService = inject(AssessmentService);
  userAuthenticated = input<boolean>(false);

  personalInformationFormGroup = new FormGroup({
    lastname: new FormControl<string | null>(null, {
      nonNullable: this.userAuthenticated()
    }),
    firstname: new FormControl<string | null>(null, {
      nonNullable: this.userAuthenticated()
    }),
    middlename: new FormControl<string | null>(null, {
      nonNullable: this.userAuthenticated()
    }),
    email: new FormControl<string | null>(null, {
      nonNullable: this.userAuthenticated(),
      validators: Validators.email
    }),
    phone: new FormControl<string | null>(null, {
      nonNullable: this.userAuthenticated()
    }),
    dob: new FormControl<string | null>(null, {
      nonNullable: this.userAuthenticated()
    }),
  })

  pregnancyInformationFormGroup = new FormGroup({
    gestationalAge: new FormControl(null, {
      nonNullable: this.userAuthenticated()
    }),
    firstPregnancy: new FormControl(null, {
      nonNullable: false
    }),
    previousComplications: new FormControl<string | null>(null, {
      nonNullable: false
    })
  })

  healthMeasurementsFormGroup = new FormGroup({
    systolicBP: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: [Validators.min(60), Validators.max(250), Validators.required]
    }),
    diastolicBP: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: [Validators.min(30), Validators.max(150), Validators.required]
    }),
    age: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: [Validators.min(18), Validators.required]
    }),
    bloodSugar: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: [Validators.min(2), Validators.required]
    }),
    bodyTemp: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: [Validators.min(36), Validators.max(43), Validators.required]
    }),
    heartRate: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: [Validators.min(30), Validators.max(220), Validators.required]
    }),
  })

  prepareDataForSubmission(): AssessmentApi {
    const personal = this.personalInformationFormGroup.getRawValue();
    const pregnancy = this.pregnancyInformationFormGroup.getRawValue();
    const health = this.healthMeasurementsFormGroup.getRawValue();

    return {
      ...personal,
      ...pregnancy,
      age: health.age ?? 0,
      bloodSugar: health.bloodSugar ?? 0,
      bodyTemp: health.bodyTemp ?? 0,
      diastolicBP: health.diastolicBP ?? 0,
      systolicBP: health.systolicBP ?? 0,
      heartRate: health.heartRate ?? 0,
    };
  }

  isValidForSubmission() {
    if (!this.userAuthenticated())
      return this.healthMeasurementsFormGroup.valid;


    return this.personalInformationFormGroup.valid && this.pregnancyInformationFormGroup.valid && this.healthMeasurementsFormGroup.valid
  }

  openDialog() {
    if (!this.isValidForSubmission()) return;
    if(this.isEmergency()) {
      this.dialog.open(EmergencyOverrideDialog);
      return;
    }

    const dialogRef = this.dialog.open(AcknowledgementDialog);

    console.log(this.prepareDataForSubmission());

    dialogRef.afterClosed().subscribe(result => {
      const agreed = result;

      console.log(agreed);

      if (agreed)
        this.assessmentService.submitAssessment(this.prepareDataForSubmission());
    });
  }

  isEmergency() {
    const systolicBP = this.healthMeasurementsFormGroup.controls.systolicBP.getRawValue(),
    diastolicBP = this.healthMeasurementsFormGroup.controls.diastolicBP.getRawValue();

    if(!systolicBP || !diastolicBP) 
      return false;
    else
      return systolicBP >= 160 || diastolicBP >= 110;
  }
}
