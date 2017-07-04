import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { MdDialog } from '@angular/material';

import { FlashcardService } from '../shared/flashcard.service';
import { Category } from '../shared/category';
import { Word } from '../shared/word';
import { DialogComponent } from '../dialog/dialog/dialog.component';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent implements OnInit {

  public allCategories: Category[] = [];

  public categoryId: string;

  public mode: string;

  public value: number;

  public isProgressVisible: boolean;

  constructor(private flashcardService: FlashcardService, public dialog: MdDialog) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.showProgressBar();
    this.flashcardService.getCategories()
      .subscribe(categories => {
        categories.forEach(category => {
          const newCategory = new Category(category.name, category._id);
          this.allCategories.push(newCategory);
          this.categoryId = undefined;
          this.hideProgressBar();
        });
      }, err => {
        console.error(err);
        this.hideProgressBar();
      });
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

  openDialog(id: string, name: string) {
    this.dialog.open(DialogComponent, {
      data: {
        id: id,
        name: name
      }
    });
  }

}
