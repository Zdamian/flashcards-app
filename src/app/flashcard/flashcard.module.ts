import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FlashcardService } from './shared/flashcard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [FlashcardsComponent],
  declarations: [FlashcardsComponent],
  providers: [
    FlashcardService
  ]
})
export class FlashcardModule { }
