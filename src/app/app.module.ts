import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlashcardModule } from './flashcard/flashcard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    FlashcardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
