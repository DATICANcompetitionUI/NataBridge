import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3 } from './h3';

describe('H3', () => {
  let component: H3;
  let fixture: ComponentFixture<H3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H3],
    }).compileComponents();

    fixture = TestBed.createComponent(H3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
