import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogC } from './blog-C';

describe('BlogC', () => {
  let component: BlogC;
  let fixture: ComponentFixture<BlogC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
