import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FlashcardService } from './shared/flashcard.service';
import { MenuComponent } from './menu/menu.component';
import { WordsComponent } from './words/words.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  exports: [FlashcardsComponent, MenuComponent],
  declarations: [FlashcardsComponent, MenuComponent, WordsComponent, CategoriesComponent],
  providers: [
    FlashcardService
  ]
})
export class FlashcardModule { }
