import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalBasics } from './signal-basics';

describe('SignalBasics', () => {
  let component: SignalBasics;
  let fixture: ComponentFixture<SignalBasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalBasics],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalBasics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
