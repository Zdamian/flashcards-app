import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule } from '@angular/material';

import { FlashcardsComponent } from './flashcards/flashcards.component';
import { FlashcardService } from './shared/flashcard.service';
import { MenuComponent } from './menu/menu.component';
import { WordsComponent } from './words/words.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewWordComponent } from './new-word/new-word.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule,

    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule
  ],
  exports: [
    FlashcardsComponent,
    MenuComponent,
    MdButtonModule,
    MdCheckboxModule
  ],
  declarations: [FlashcardsComponent, MenuComponent, WordsComponent, CategoriesComponent, NewWordComponent],
  providers: [
    FlashcardService
  ]
})
export class FlashcardModule { }
