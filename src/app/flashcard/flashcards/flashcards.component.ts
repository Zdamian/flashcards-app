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

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
  }

  getFlashcards(category: string) {
    this.flashcards = [];
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

}
