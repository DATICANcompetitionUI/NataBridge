import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNavBar } from './test-nav-bar';

describe('TestNavBar', () => {
  let component: TestNavBar;
  let fixture: ComponentFixture<TestNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestNavBar],
    }).compileComponents();

    fixture = TestBed.createComponent(TestNavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
