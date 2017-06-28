import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { MdInputModule } from '@angular/material';
import * as _ from 'underscore';

import { FlashcardService } from '../../shared/flashcard.service';
import { Category } from '../../shared/category';
import { Word } from '../../shared/word';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public flashcards: Word[] = [];

  public category: Category = <any>{};

  public words: Word[] = [];

  public categoryId: string;

  constructor(private flashcardService: FlashcardService, @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
      this.flashcardService.getCategory(this.data.id)
      .subscribe(category => {
        const newCategory = new Category(category.name, category._id);
        this.category = newCategory;
        this.categoryId = undefined;
      }, err => {
        console.error(err);
      });

      this.flashcardService.getFlashcards(this.data.name)
      .subscribe(words => {
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

  preview() {
    this.flashcardService.getFlashcards(this.data.name)
      .subscribe(words => {
        words.forEach(word => {
          const newCategory = new Category(word.category[0].name, word.category[0]._id);
          const newWord = new Word(word.polish, word.english, newCategory, word.known, word._id);
          this.words.push(newWord);
          this.categoryId = undefined;
        });
      }, err => {
        console.error(err);
      });
  }

  deleteCategory(id: string) {
    this.flashcardService.deleteCategory(id)
      .subscribe(category => {
      }, err => {
        console.error(err);
      });
  }

  deleteWord(id: string) {
    this.flashcardService.deleteWord(id)
      .subscribe(res => {
        const removedWord = _(this.flashcards).findWhere({id: id});
        const removedWordId = _(this.flashcards).indexOf(removedWord);
        this.flashcards.splice(removedWordId, 1);
        this.words = [];
      }, err => {
        console.error(err);
      });
  }

  toGridDetails() {
    this.words = [];
  }
}
