import { Component, OnInit } from '@angular/core';

import { FlashcardService } from '../shared/flashcard.service';
import { Category } from '../shared/category';
import { Word } from '../shared/word';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  public allWords: Word[] = [];

  public word: Word = <any>{};

  public allCategoriesForm: Category[] = [];

  public id: string;

  public polish: string;

  public english: string;

  public categoryId: string;

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
    this.getWords();

    this.getCategories();
  }

  clearArrays() {
    this.allWords = [];
    this.word = <any>{};
  }

  getCategories() {
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

  getWords() {
    this.clearArrays()
    this.flashcardService.getWords()
      .subscribe(words => {
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
        this.allCategoriesForm = [];
        this.getWords();
        this.getCategories();
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
        this.categoryId = undefined;
        this.allCategoriesForm = [];
        this.getWords();
        this.getCategories();
      }, err => {
        console.error(err);
      });
  }

  deleteWord(id: string) {
    this.clearArrays()
    this.flashcardService.deleteWord(id)
      .subscribe(word => {
        console.log(id);
        this.allCategoriesForm = [];
        this.getWords();
        this.getCategories();
      }, err => {
        console.error(err);
      });
  }

}
