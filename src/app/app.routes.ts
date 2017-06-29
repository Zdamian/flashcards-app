
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './flashcard/home-page/home-page.component';
import { NewWordComponent } from './flashcard/new-word/new-word.component';
import { NewCategoryComponent } from './flashcard/new-category/new-category.component';
import { FlashcardsComponent } from './flashcard/flashcards/flashcards.component';
import { CategoriesComponent } from './flashcard/categories/categories.component';
import { WordsComponent } from './flashcard/words/words.component';
import { FlashcardsLearnComponent } from './flashcard/flashcards-learn/flashcards-learn.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home-page',
        pathMatch: 'full'
    },
    {
        path: 'home-page',
        component: HomePageComponent,
    },
    {
        path: 'new-word',
        component: NewWordComponent,
    },
    {
        path: 'new-category',
        component: NewCategoryComponent,
    },
    {
        path: 'flashcards',
        component: FlashcardsComponent,
    },
    {
        path: 'flashcards/:category',
        component: FlashcardsLearnComponent,
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
