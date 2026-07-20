import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentTest } from './assessment-test';

describe('AssessmentTest', () => {
  let component: AssessmentTest;
  let fixture: ComponentFixture<AssessmentTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentTest],
    }).compileComponents();

    fixture = TestBed.createComponent(AssessmentTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
