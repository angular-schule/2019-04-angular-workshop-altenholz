import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { RepeatDirective } from './repeat.directive';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    CreateBookComponent,
    BookFormComponent,
    RepeatDirective
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
