import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogB } from './blog-B';

describe('BlogB', () => {
  let component: BlogB;
  let fixture: ComponentFixture<BlogB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
