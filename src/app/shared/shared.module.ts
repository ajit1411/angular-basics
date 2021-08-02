import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rating } from './rating/rating.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Rating
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Rating,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
