import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'nata-acknowledgement-dialog',
  imports: [MatDialogModule],
  templateUrl: './acknowledgement-dialog.html',
  styleUrl: './acknowledgement-dialog.css',
})
export class AcknowledgementDialog {
  private readonly dialogRef = inject(MatDialogRef<AcknowledgementDialog>);

  closeDialog(value: boolean): void {
    this.dialogRef.close(value);
  }
}
