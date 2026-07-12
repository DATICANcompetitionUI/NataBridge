import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1 } from './h1';

describe('H1', () => {
  let component: H1;
  let fixture: ComponentFixture<H1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H1],
    }).compileComponents();

    fixture = TestBed.createComponent(H1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
