import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CalendarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-excel-example'`, () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-excel-example');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-excel-example app is running!');
  });
});