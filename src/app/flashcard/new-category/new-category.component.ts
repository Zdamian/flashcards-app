import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';

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

  constructor(private flashcardService: FlashcardService, public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  postCategory(name: string) {
    this.flashcardService.postCategory(name)
      .subscribe(category => {
        this.name = '';
        this.categoryId = undefined;
        this.openSnackBar();
      }, err => {
        console.error(err);
        this.openSnackBarFail();
      });
  }

  openSnackBar() {
    this.snackBar.open('A new category added!', '', {
      duration: 2000,
    });
  }

  openSnackBarFail() {
    this.snackBar.open('You must fill in field of category!', '', {
      duration: 2000,
    });
  }

}
