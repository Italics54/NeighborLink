import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogA } from './blog-A';

describe('BlogA', () => {
  let component: BlogA;
  let fixture: ComponentFixture<BlogA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
