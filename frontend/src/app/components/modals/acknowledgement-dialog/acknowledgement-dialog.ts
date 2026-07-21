import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { UtilService } from '../../../services/util/util-service';

@Component({
  selector: 'nata-acknowledgement-dialog',
  imports: [MatDialogModule],
  templateUrl: './acknowledgement-dialog.html',
  styleUrl: './acknowledgement-dialog.css',
})
export class AcknowledgementDialog {
  readonly dialogRef = inject(MatDialogRef<AcknowledgementDialog>);
  
  closeDialog(value: boolean) {
    this.dialogRef.close(value);
  }
}
