import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';
import { By } from '@angular/platform-browser';

fdescribe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // Initialisierung: VOR detectChanges() !
    component.book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on doRateUp()', () => {
    // Arrange
    let eventBook: Book;

    component.rateUp.subscribe(book => {
      eventBook = book;
    });

    // Act
    component.doRateUp();

    // Assert
    expect(eventBook).toBeTruthy();
    expect(eventBook).toBe(component.book);
  });

  it('should call method for button click', () => {
    // Spionage!
    spyOn(component, 'doRateUp');

    // Button holen
    const rateUpBtn = fixture.debugElement
      .query(By.css('[data-testing-id="rateUpBtn"]'))
      .nativeElement;

    // Button klicken
    rateUpBtn.click();

    // gucken ob Methode aufgerufen
    expect(component.doRateUp).toHaveBeenCalled();
  });
});
