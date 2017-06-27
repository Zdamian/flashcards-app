import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';

import { FlashcardService } from '../shared/flashcard.service';
import { Category } from '../shared/category';
import { Word } from '../shared/word';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent implements OnInit {

  public flashcards: Word[] = [];

  public allCategories: Category[] = [];

  public categoryId: string;

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
    this.clearArrays()
    this.flashcardService.getCategories()
      .subscribe(categories => {
        console.log(categories);
        categories.forEach(category => {
          const newCategory = new Category(category.name, category._id);
          this.allCategories.push(newCategory);
          this.categoryId = undefined;
        });
      }, err => {
        console.error(err);
      });
  }

  clearArrays() {
    this.flashcards = [];
  }

  getFlashcards(category: string) {
    this.clearArrays()
    this.flashcardService.getFlashcards(category)
      .subscribe(words => {
        console.log(words);
        words.forEach(word => {
          const newCategory = new Category(word.category[0].name, word.category[0]._id);
          const newWord = new Word(word.polish, word.english, newCategory, word.known, word._id);
          this.flashcards.push(newWord);
          this.categoryId = undefined;
        });
      }, err => {
        console.error(err);
      });
  }

}
