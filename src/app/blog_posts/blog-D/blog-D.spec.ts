import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogD } from './blog-D';

describe('BlogD', () => {
  let component: BlogD;
  let fixture: ComponentFixture<BlogD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
