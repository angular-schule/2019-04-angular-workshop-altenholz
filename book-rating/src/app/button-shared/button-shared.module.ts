import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyButtonComponent } from './fancy-button/fancy-button.component';

@NgModule({
  declarations: [FancyButtonComponent],
  exports: [FancyButtonComponent],
  imports: [
    CommonModule
  ]
})
export class ButtonSharedModule { }
