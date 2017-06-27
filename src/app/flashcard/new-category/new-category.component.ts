import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';

import { FlashcardService } from '../shared/flashcard.service';
import { Category } from '../shared/category';
import { Word } from '../shared/word';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  public name: string;

  public categoryId: string;

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
  }

  postCategory(name: string) {
    this.flashcardService.postCategory(name)
      .subscribe(category => {
        this.name = '';
        this.categoryId = undefined;
      }, err => {
        console.error(err);
      });
  }

}
