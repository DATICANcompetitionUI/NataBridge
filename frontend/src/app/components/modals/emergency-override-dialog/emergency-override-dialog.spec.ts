import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyOverrideDialog } from './emergency-override-dialog';

describe('EmergencyOverrideDialog', () => {
  let component: EmergencyOverrideDialog;
  let fixture: ComponentFixture<EmergencyOverrideDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyOverrideDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(EmergencyOverrideDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
