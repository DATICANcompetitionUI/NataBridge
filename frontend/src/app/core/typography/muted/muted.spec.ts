import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Muted } from './muted';

describe('Muted', () => {
  let component: Muted;
  let fixture: ComponentFixture<Muted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Muted],
    }).compileComponents();

    fixture = TestBed.createComponent(Muted);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
