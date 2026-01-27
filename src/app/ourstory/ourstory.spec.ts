import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ourstory } from './ourstory';

describe('Ourstory', () => {
  let component: Ourstory;
  let fixture: ComponentFixture<Ourstory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ourstory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ourstory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
