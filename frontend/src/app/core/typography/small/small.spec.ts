import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Small } from './small';

describe('Small', () => {
  let component: Small;
  let fixture: ComponentFixture<Small>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Small],
    }).compileComponents();

    fixture = TestBed.createComponent(Small);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
