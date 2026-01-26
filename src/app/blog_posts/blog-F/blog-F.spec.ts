import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogF } from './blog-F';

describe('BlogF', () => {
  let component: BlogF;
  let fixture: ComponentFixture<BlogF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
