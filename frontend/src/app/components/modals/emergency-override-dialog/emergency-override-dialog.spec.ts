import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EmergencyOverrideDialog } from './emergency-override-dialog';

describe('EmergencyOverrideDialog', () => {
  let component: EmergencyOverrideDialog;
  let fixture: ComponentFixture<EmergencyOverrideDialog>;
  let dialogRef: { close: ReturnType<typeof vi.fn> };
  const dialogData = { systolicBP: 165, diastolicBP: 112 };

  beforeEach(async () => {
    dialogRef = { close: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [EmergencyOverrideDialog],
      providers: [
        { provide: MatDialogRef, useValue: dialogRef },
        { provide: MAT_DIALOG_DATA, useValue: dialogData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmergencyOverrideDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('exposes the blood-pressure readings supplied by the assessment', () => {
    expect(component.data).toEqual(dialogData);
    expect(fixture.nativeElement.textContent).toContain('165 / 112');
  });

  it('closes without an override result', () => {
    component.closeDialog();

    expect(dialogRef.close).toHaveBeenCalledOnce();
    expect(dialogRef.close).toHaveBeenCalledWith();
  });
});
