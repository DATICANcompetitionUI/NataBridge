import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgementDialog } from './acknowledgement-dialog';

describe('AcknowledgementDialog', () => {
  let component: AcknowledgementDialog;
  let fixture: ComponentFixture<AcknowledgementDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcknowledgementDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AcknowledgementDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
