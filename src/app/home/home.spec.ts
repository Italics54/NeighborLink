import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the home component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the site header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.site-header')).toBeTruthy();
  });

  it('should render the hero section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero')).toBeTruthy();
  });

  it('should render the featured resources section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.featured')).toBeTruthy();
  });

  it('should render the events section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.events')).toBeTruthy();
  });
});
