import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';

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

  public temp: string;

  constructor(
    private flashcardService: FlashcardService,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.getWords();

    this.getCategories();

    this.temp = '';
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
    this.temp = '';
    this.word = <any>{};
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
    this.polish = polish;
    this.english = english;
    this.id = id;
    this.categoryId = categoryId;
    this.temp = 'editing word';
    console.log(this.polish, this.english, this.id, this.categoryId);
  }

  putWord(polish: string, english: string) {
    const Id = this.id;
    this.flashcardService.putWord(Id, {polish: polish, english: english})
      .subscribe(category => {
        this.polish = '';
        this.english = '';
        this.id = '';
        this.categoryId = '';
        this.clearArrays()
        this.temp = '';
        this.allCategoriesForm = [];
        this.openSnackBarEdit();
        this.getWords();
        this.getCategories();
      }, err => {
        console.error(err);
        this.openSnackBarFail();
      });
  }

  cancel(name: string) {
    this.temp = '';
  }

  deleteWord(id: string) {
    this.clearArrays()
    this.temp = '';
    this.flashcardService.deleteWord(id)
      .subscribe(word => {
        this.allCategoriesForm = [];
        this.getWords();
        this.getCategories();
        this.openSnackBarDelete();
      }, err => {
        console.error(err);
        this.openSnackBarFail();
      });
  }

  openSnackBarDelete() {
    this.snackBar.open('Word deleted!', '', {
      duration: 2000,
    });
  }

  openSnackBarEdit() {
    this.snackBar.open('Word updated!', '', {
      duration: 2000,
    });
  }

  openSnackBarFail() {
    this.snackBar.open('Something is wrong!', '', {
      duration: 2000,
    });
  }

}
