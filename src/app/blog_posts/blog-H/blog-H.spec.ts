import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogH } from './blog-H';

describe('BlogH', () => {
  let component: BlogH;
  let fixture: ComponentFixture<BlogH>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogH]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogH);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
