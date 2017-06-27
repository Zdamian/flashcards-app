
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashcardsComponent } from './flashcard/flashcards/flashcards.component';
import { NewWordComponent } from './flashcard/new-word/new-word.component';
import { CategoriesComponent } from './flashcard/categories/categories.component';
import { WordsComponent } from './flashcard/words/words.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/flashcards',
        pathMatch: 'full'
    },
    {
        path: 'flashcards',
        component: FlashcardsComponent,
    },
    {
        path: 'new-word',
        component: NewWordComponent,
    },
    {
        path: 'categories',
        component: CategoriesComponent,
    },
    {
        path: 'words',
        component: WordsComponent,
    }
];


@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
