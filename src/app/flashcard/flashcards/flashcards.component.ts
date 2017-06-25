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

  public categories: Category[] = [];

  public words: Word[] = [];

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
  }

  getFlashcards(category: string) {
    this.flashcards = [];
    this.categories = [];
    this.allWords = [];
    this.allCategories = [];
    this.words = [];
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

  getGategories(categories: string) {
    this.flashcards = [];
    this.categories = [];
    this.allWords = [];
    this.allCategories = [];
    this.words = [];
    this.flashcardService.getGategories(categories)
      .subscribe(gategories => {
        console.log(gategories);
        gategories.forEach(category => {
          const newCategory = new Category(category.name, category._id);
          this.allCategories.push(newCategory);
        });
      }, err => {
        console.error(err);
      });

  }

  getWords(words: string) {
    this.flashcards = [];
    this.categories = [];
    this.allWords = [];
    this.allCategories = [];
    this.words = [];
    this.flashcardService.getWords(words)
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
    this.flashcards = [];
    this.categories = [];
    this.allWords = [];
    this.allCategories = [];
    this.words = [];
    this.flashcardService.getCategory(id)
      .subscribe(category => {
      console.log(category);
          const newCategory = new Category(category.name, category._id);
          this.categories.push(newCategory);
      }, err => {
        console.error(err);
      });
  }

  getWord(id: string) {
    this.flashcards = [];
    this.categories = [];
    this.allWords = [];
    this.allCategories = [];
    this.words = [];
    this.flashcardService.getWord(id)
      .subscribe(word => {
      console.log(word);
          const newCategory = new Category(word.category[0].name, word.category[0]._id);
          const newWord = new Word(word.polish, word.english, newCategory, word.known, word._id);
          this.words.push(newWord);
      }, err => {
        console.error(err);
      });
  }

}
