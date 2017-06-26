import { Component, OnInit } from '@angular/core';

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

  public allWords: Word[] = [];

  public category: Category = <any>{};

  public word: Word = <any>{};

  public allCategoriesForm: Category[] = [];

  public name: string;

  public polish: string;

  public english: string;

  public message: String = '';

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
  }

  public clearArrays() {
    this.flashcards = [];
    this.allWords = [];
    this.allCategories = [];
    this.category = <any>{};
    this.word = <any>{};
  }

  showCategories() {
    this.clearArrays()
    this.flashcardService.getCategories()
      .subscribe(categories => {
        console.log(categories);
        categories.forEach(category => {
          const newCategory = new Category(category.name, category._id);
          this.allCategoriesForm.push(newCategory);
        });
      }, err => {
        console.error(err);
      });
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
        });
      }, err => {
        console.error(err);
      });
  }

  getCategories() {
    this.clearArrays()
    this.flashcardService.getCategories()
      .subscribe(categories => {
        console.log(categories);
        categories.forEach(category => {
          const newCategory = new Category(category.name, category._id);
          this.allCategories.push(newCategory);
        });
      }, err => {
        console.error(err);
      });

  }

  getWords() {
    this.clearArrays()
    this.flashcardService.getWords()
      .subscribe(words => {
        console.log(words);
        words.forEach(word => {
          const newCategory = new Category(word.category[0].name, word.category[0]._id);
          const newWord = new Word(word.polish, word.english, newCategory, word.known, word._id);
          this.allWords.push(newWord);
        });
      }, err => {
        console.error(err);
      });
  }

  getCategory(id: string) {
    this.clearArrays()
    this.flashcardService.getCategory(id)
      .subscribe(category => {
      console.log(category);
          const newCategory = new Category(category.name, category._id);
          this.category = newCategory;
      }, err => {
        console.error(err);
      });
  }

  getWord(id: string) {
    this.clearArrays()
    this.flashcardService.getWord(id)
      .subscribe(word => {
      console.log(word);
          const newCategory = new Category(word.category[0].name, word.category[0]._id);
          const newWord = new Word(word.polish, word.english, newCategory, word.known, word._id);
          this.word = newWord;
      }, err => {
        console.error(err);
      });
  }

  postCategory(name: string) {
    this.clearArrays()
    this.flashcardService.postCategory(name)
      .subscribe(category => {
      this.name = '';
      }, err => {
        console.error(err);
      });
  }

  postWord(polish: string, english: string, categoryId: string) {
    this.clearArrays()
    this.flashcardService.postWord(polish, english, categoryId)
      .subscribe(word => {
      console.log(polish, english, categoryId);
      this.polish = '';
      this.english = '';
      this.allCategoriesForm = [];
      }, err => {
        console.error(err);
      });
  }

  deleteWord(id: string) {
    this.clearArrays()
    this.flashcardService.deleteWord(id)
      .subscribe(word => {
      console.log(id);
      }, err => {
        console.error(err);
      });
  }

  deleteCategory(id: string) {
    this.clearArrays()
    this.flashcardService.deleteCategory(id)
      .subscribe(category => {
      console.log(id);
      }, err => {
        console.error(err);
        this.message = 'You can not delete this category';
      });
  }

  removeMessage() {
        this.message = '';
  }

}
