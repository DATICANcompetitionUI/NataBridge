import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

interface EmergencyDialogData {
  systolicBP: number | null;
  diastolicBP: number | null;
}

@Component({
  selector: 'nata-emergency-override-dialog',
  imports: [MatDialogModule],
  templateUrl: './emergency-override-dialog.html',
  styleUrl: './emergency-override-dialog.css',
})
export class EmergencyOverrideDialog {
  private readonly dialogRef = inject(MatDialogRef<EmergencyOverrideDialog>);
  readonly data = inject<EmergencyDialogData>(MAT_DIALOG_DATA);

  closeDialog(): void {
    this.dialogRef.close();
  }
}
