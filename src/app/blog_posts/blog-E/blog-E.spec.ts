import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogE } from './blog-E';

describe('BlogE', () => {
  let component: BlogE;
  let fixture: ComponentFixture<BlogE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogE);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
