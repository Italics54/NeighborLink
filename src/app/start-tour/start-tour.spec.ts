import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTour } from './start-tour';

describe('StartTour', () => {
  let component: StartTour;
  let fixture: ComponentFixture<StartTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartTour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartTour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
