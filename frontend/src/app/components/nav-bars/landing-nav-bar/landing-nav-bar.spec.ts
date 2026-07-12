import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavBar } from './landing-nav-bar';

describe('LandingNavBar', () => {
  let component: LandingNavBar;
  let fixture: ComponentFixture<LandingNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingNavBar],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingNavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
