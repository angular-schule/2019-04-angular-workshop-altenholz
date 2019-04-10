import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let bookRatingMock;
  let book: Book;

  beforeEach(() => {
    book = {
      isbn: '000',
      title: 'title',
      description: 'desc',
      rating: 3
    };

    bookRatingMock = {
      rateUp: () => book,
      rateDown: () => book
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: BookRatingService, useValue: bookRatingMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for rateUp', () => {
    // Service holen
    const rs = TestBed.get(BookRatingService);
    // oder bookRatingMock

    // spy an den Service
    spyOn(rs, 'rateUp').and.callThrough();

    // comp.rateUp aufrufen
    component.rateUp(book);

    // prüfen ob aufgerufen mit Argument
    expect(rs.rateUp).toHaveBeenCalledWith(book);
  });

  it('should update the book list', () => {
    // Methode updateList aufrufen
    component.updateList(book);

    // expect: Buch wurde aktualisiert
    const foundBook = component.books.find(b => b.isbn === book.isbn);

    expect(foundBook).toBeTruthy();
    expect(foundBook).toEqual(book); // toEqual() macht Deep Compare
  });
});
