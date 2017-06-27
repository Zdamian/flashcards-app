
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashcardsComponent } from './flashcard/flashcards/flashcards.component';
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
