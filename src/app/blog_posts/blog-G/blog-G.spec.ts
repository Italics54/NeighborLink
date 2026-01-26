import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogG } from './blog-G';

describe('BlogG', () => {
  let component: BlogG;
  let fixture: ComponentFixture<BlogG>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogG]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogG);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
