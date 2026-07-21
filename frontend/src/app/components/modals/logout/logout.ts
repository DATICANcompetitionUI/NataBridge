import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'nata-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  readonly dialogRef = inject(MatDialogRef<Logout>);
  
  closeDialog(value: boolean) {
    this.dialogRef.close(value);
  }
}
