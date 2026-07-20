import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTest } from './quick-test';

describe('QuickTest', () => {
  let component: QuickTest;
  let fixture: ComponentFixture<QuickTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickTest],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
