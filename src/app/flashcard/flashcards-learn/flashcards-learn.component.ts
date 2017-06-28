import { Component, OnInit } from '@angular/core';

import { FlashcardService } from '../shared/flashcard.service';
import { Category } from '../shared/category';
import { Word } from '../shared/word';

@Component({
  selector: 'app-flashcards-learn',
  templateUrl: './flashcards-learn.component.html',
  styleUrls: ['./flashcards-learn.component.scss']
})
export class FlashcardsLearnComponent implements OnInit {

  public allWords: Word[] = [];

  public word: Word = <any>{};

  public categoryId: string;

  public color = 'primary';

  public checked = false;

  public disabled = false;

  public position = 'below';

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
    this.flashcardService.getFlashcards('eating')
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

  changeWord(element, english: string, polish: string) {
    if (element.textContent === english) {
      element.textContent = polish;
    } else {
      element.textContent = english;
    }
  }

  toggleKnown(polish: string, english: string, id: string, known: boolean) {
    this.flashcardService.putWord(polish, english, id, '594f8025650e7d7bf081adf9')
      .subscribe(category => {
        console.log('updated')
      }, err => {
        console.error(err);
      });
  }

}
