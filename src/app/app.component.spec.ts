import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
    // ...
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter when the button is clicked', () => {
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    
    // Trigger the button click
    button.click();
    fixture.detectChanges();

    // Check if the counter has been incremented
    expect(component.counter).toBe(1);

    // Check if the displayed counter value is updated
    const paragraph = nativeElement.querySelector('p');
    expect(paragraph.textContent).toContain('1 times');
  });
});
