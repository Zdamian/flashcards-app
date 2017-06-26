import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FlashcardService } from './shared/flashcard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [FlashcardsComponent],
  declarations: [FlashcardsComponent],
  providers: [
    FlashcardService
  ]
})
export class FlashcardModule { }
