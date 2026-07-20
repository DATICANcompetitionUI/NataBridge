import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTestResult } from './quick-test-result';

describe('QuickTestResult', () => {
  let component: QuickTestResult;
  let fixture: ComponentFixture<QuickTestResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickTestResult],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickTestResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
