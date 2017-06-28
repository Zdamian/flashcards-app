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
import { NewCategoryComponent } from './new-category/new-category.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DialogComponent } from './dialog/dialog/dialog.component';
import { DialogModule } from './dialog/dialog.module';
import { FlashcardsLearnComponent } from './flashcards-learn/flashcards-learn.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule,

    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    DialogModule
  ],
  exports: [
    FlashcardsComponent,
    MenuComponent,
    MdButtonModule,
    MdCheckboxModule,
    DialogModule
  ],
  declarations: [
    FlashcardsComponent,
    MenuComponent,
    WordsComponent,
    CategoriesComponent,
    NewWordComponent,
    NewCategoryComponent,
    HomePageComponent,
    FlashcardsLearnComponent
  ],
  providers: [
    FlashcardService
  ],
  entryComponents: [DialogComponent]
})
export class FlashcardModule { }
