import {
  Component, OnInit, HostListener,
  trigger, state, style, transition, animate
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';

import { FlashcardService } from '../shared/flashcard.service';
import { Category } from '../shared/category';
import { Word } from '../shared/word';


export const KEY = {
  SPACE: 32,
  LEFT_ARROW: 37,
  UP_ARROW: 38,
  RIGHT_ARROW: 39,
  DOWN_ARROW: 40,
};

export const TRANSITION_TIME = 800;

@Component({
  selector: 'app-flashcards-learn',
  templateUrl: './flashcards-learn.component.html',
  styleUrls: ['./flashcards-learn.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('moveLeft => void', [
        style({
          'transform': 'translateX(0)'
        }),
        animate(TRANSITION_TIME, style({
          'transform': 'translateX(-100%)'
        }))
      ]),
      transition('void => moveLeft', [
        style({
          'transform': 'translateX(100%)',
          'left': '100px'
        }),
        animate(TRANSITION_TIME, style({
          'transform': 'translateX(0)',
          'left': '0px'
        }))
      ]),
      transition('moveRight => void', [
        style({
          'transform': 'translateX(0)'
        }),
        animate(TRANSITION_TIME, style({
          'transform': 'translateX(100%)'
        }))
      ]),
      transition('void => moveRight', [
        style({
          'transform': 'translateX(-100%)',
          'left': '-100px'
        }),
        animate(TRANSITION_TIME, style({
          'transform': 'translateX(0)',
          'left': '0px'
        }))
      ]),
    ]),
    trigger('sideAnimation', [
      state('visible', style({
        'transform': 'scale(1) rotateY(0)'
      })),
      state('hidden', style({
        'transform': 'scale(0.6) rotateY(90deg)'
      })),
      transition('visible <=> hidden', animate(TRANSITION_TIME / 2))
    ]),
  ],
})
export class FlashcardsLearnComponent implements OnInit {

  public stateCardAnimation: string;

  public stateSideAnimation: String = 'visible';

  public allWords: Word[] = [];

  public word: Word = <any>{};

  public categoryId: string;

  public currentId: number;

  public color = 'primary';

  public checked = false;

  public disabled = false;

  public position = 'below';

  public isPreviousBtnVisible: boolean;

  public isNextBtnVisible: boolean;

  public isCardOnEnglishSide: boolean;

  @HostListener('document:keydown', ['$event'])
  keydownHandler(e: KeyboardEvent) {
    if (e.keyCode === KEY.LEFT_ARROW) {
      this.next(-1);
    } else if (e.keyCode === KEY.RIGHT_ARROW) {
      this.next(1);
    } else if (e.keyCode === KEY.UP_ARROW || e.keyCode === KEY.DOWN_ARROW) {
      this.changeSide();
    }
  }

  constructor(
    private flashcardService: FlashcardService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initActivatedRoute();
  }

  initActivatedRoute() {
    this.activatedRoute.params.subscribe(params => {
      const category = params.category;

      this.flashcardService.getFlashcards(category)
        .subscribe(words => {
          words.forEach(word => {
            const newCategory = new Category(word.category[0].name, word.category[0]._id);
            const newWord = new Word(word.polish, word.english, newCategory, word.known, word._id);
            this.allWords.push(newWord);
          });
          this.currentId = 0;
          this.categoryId = undefined;
          if (this.allWords.length > 1) {
            this.isNextBtnVisible = true;
          }
        }, err => {
          console.error(err);
        });
      });
  }

  changeSide() {

    this.stateSideAnimation = 'hidden';
    setTimeout(() => {
      this.isCardOnEnglishSide = !this.isCardOnEnglishSide;
      this.stateSideAnimation = 'visible';
    }, TRANSITION_TIME / 2);
  }

  onSlideToggleChange(id: string, slide: any) {

    this.toggleKnown(id, slide.value);
  }

  toggleKnown(id: string, known: boolean) {
    console.log(known);
    this.flashcardService.putWord(id, {known: known})
      .subscribe(updatedWord => {
        const updatingWord = _(this.allWords).findWhere({id: id});
        updatingWord.known = updatedWord.known;
        console.log('updated')
      }, err => {
        console.error(err);
      });
  }

  next(dx: number) {

    const newPosition = this.currentId + dx;

    if (dx > 0) {
      // go to next card
      this.stateCardAnimation = 'moveLeft';

    } else {
      // go to previous card
      this.stateCardAnimation = 'moveRight';

    }

    setTimeout(() => {
      this.isNextBtnVisible = true;
      this.isPreviousBtnVisible = true;

      if (newPosition >= this.allWords.length - 1) {
        this.isNextBtnVisible = false;
        this.currentId = this.allWords.length - 1;
      } else if (newPosition <= 0) {
        this.isPreviousBtnVisible = false;
        this.currentId = 0;
      } else {
        this.currentId = newPosition;
      }

      this.isCardOnEnglishSide = false;
    });
  }
}
