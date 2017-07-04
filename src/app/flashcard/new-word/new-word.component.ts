import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';

import { FlashcardService } from '../shared/flashcard.service';
import { Category } from '../shared/category';
import { Word } from '../shared/word';

@Component({
  selector: 'app-new-word',
  templateUrl: './new-word.component.html',
  styleUrls: ['./new-word.component.scss']
})
export class NewWordComponent implements OnInit {

  public word: Word = <any>{};

  public allCategoriesForm: Category[] = [];

  public id: string;

  public polish: string;

  public english: string;

  public categoryId: string;

  public mode: string;

  public value: number;

  public isProgressVisible: boolean;

  constructor(
    private flashcardService: FlashcardService,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  clearArrays() {
    this.word = <any>{};
  }

  showProgressBar() {
    this.mode = 'indeterminate';
    this.value = 100;
    this.isProgressVisible = true;
  }

  hideProgressBar() {
    this.mode = 'determinate';
    this.value = 0;
    this.isProgressVisible = false;
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

  postWord(polish: string, english: string) {
    this.clearArrays();
    this.showProgressBar();
    this.flashcardService.postWord(polish, english, this.categoryId)
      .subscribe(word => {
        console.log(polish, english);
        this.polish = '';
        this.english = '';
        this.categoryId = undefined;
        this.allCategoriesForm = [];
        this.getCategories();
        this.openSnackBar();
        this.hideProgressBar();
      }, err => {
        console.error(err);
        this.openSnackBarFail();
        this.hideProgressBar();
      });
  }

  openSnackBar() {
    this.snackBar.open('A new word added!', '', {
      duration: 2000,
    });
  }

  openSnackBarFail() {
    this.snackBar.open('You must fill in all fields!', '', {
      duration: 2000,
    });
  }

}
