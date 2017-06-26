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

  public id: string;

  public polish: string;

  public english: string;

  public categoryId: string;

  public message: String = '';

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {

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

  public clearArrays() {
    this.flashcards = [];
    this.allWords = [];
    this.allCategories = [];
    this.category = <any>{};
    this.word = <any>{};
  }

  editWord(polish: string, english: string, id: string, categoryId: string) {
    this.clearArrays()
      this.polish = polish;
      this.english = english;
      this.id = id;
      this.categoryId = categoryId;
      console.log(this.polish, this.english, this.id, this.categoryId);
  }

  putWord(polish: string, english: string) {
    this.clearArrays()
      const Id = this.id;
    this.flashcardService.putWord(polish, english, Id, this.categoryId)
      .subscribe(category => {
      this.polish = '';
      this.english = '';
      this.id = '';
      this.categoryId = '';
      }, err => {
        console.error(err);
      });
  }

  editCategory(name: string, id: string) {
    this.clearArrays()
      this.name = name;
      this.id = id;
      console.log(this.name, this.id);
  }

  putCategory(nameEdit: string, id) {
    this.clearArrays()
      const Id = this.id;
      console.log(this.name, Id);
    this.flashcardService.putCategory(nameEdit, Id)
      .subscribe(category => {
      this.name = '';
      this.categoryId = undefined;
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
      this.categoryId = undefined;
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
      this.categoryId = undefined;
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
      this.categoryId = undefined;
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
      this.categoryId = undefined;
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
      this.categoryId = undefined;
      }, err => {
        console.error(err);
      });
  }

  postCategory(name: string) {
    this.clearArrays()
    this.flashcardService.postCategory(name)
      .subscribe(category => {
      this.name = '';
      this.categoryId = undefined;
      }, err => {
        console.error(err);
      });
  }

  postWord(polish: string, english: string) {
    this.clearArrays()
    this.flashcardService.postWord(polish, english, this.categoryId)
      .subscribe(word => {
      console.log(polish, english);
      this.polish = '';
      this.english = '';
      this.allCategoriesForm = [];
      this.categoryId = undefined;
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
