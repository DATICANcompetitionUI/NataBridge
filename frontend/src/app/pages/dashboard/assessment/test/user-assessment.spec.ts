import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssessment } from './user-assessment';

describe('Assessment', () => {
  let component: UserAssessment;
  let fixture: ComponentFixture<UserAssessment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAssessment],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAssessment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
