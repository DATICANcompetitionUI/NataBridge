import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { AcknowledgementDialog } from './acknowledgement-dialog';

describe('AcknowledgementDialog', () => {
  let component: AcknowledgementDialog;
  let fixture: ComponentFixture<AcknowledgementDialog>;
  let dialogRef: { close: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    dialogRef = { close: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [AcknowledgementDialog],
      providers: [{ provide: MatDialogRef, useValue: dialogRef }],
    }).compileComponents();

    fixture = TestBed.createComponent(AcknowledgementDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it.each([true, false])('closes with the explicit consent value %s', (value) => {
    component.closeDialog(value);

    expect(dialogRef.close).toHaveBeenCalledWith(value);
  });
});
