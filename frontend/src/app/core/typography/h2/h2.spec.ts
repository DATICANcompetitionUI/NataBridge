import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2 } from './h2';

describe('H2', () => {
  let component: H2;
  let fixture: ComponentFixture<H2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H2],
    }).compileComponents();

    fixture = TestBed.createComponent(H2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
