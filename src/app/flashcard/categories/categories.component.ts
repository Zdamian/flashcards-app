import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';

import { FlashcardService } from '../shared/flashcard.service';
import { Category } from '../shared/category';
import { Word } from '../shared/word';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {

  public allCategories: Category[] = [];

  public category: Category = <any>{};

  public name: string;

  public id: string;

  public categoryId: string;

  public temp: string;

  public color = 'primary';

  public mode: string;

  public value: number;

  public isProgressVisible: boolean;

  constructor(
    private flashcardService: FlashcardService,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.getCategories();

    this.temp = '';
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

  clearArrays() {
    this.allCategories = [];
    this.category = <any>{};
  }

  getCategories() {
    this.showProgressBar();
    this.clearArrays();
    this.flashcardService.getCategories()
      .subscribe(categories => {
        console.log(categories);
        categories.forEach(category => {
          const newCategory = new Category(category.name, category._id);
          this.allCategories.push(newCategory);
          this.categoryId = undefined;
        });
        this.hideProgressBar();
      }, err => {
        console.error(err);
        this.hideProgressBar();
      });
  }

  getCategory(id: string) {
    this.category = <any>{};
    this.temp = '';
    this.showProgressBar();
    this.flashcardService.getCategory(id)
      .subscribe(category => {
        console.log(category);
        const newCategory = new Category(category.name, category._id);
        this.category = newCategory;
        this.categoryId = undefined;
        this.hideProgressBar();
      }, err => {
        console.error(err);
        this.hideProgressBar();
      });
  }

  editCategory(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.temp = 'editing category';
  }

  putCategory(nameEdit: string, id) {
    const Id = this.id;
    this.clearArrays();
    this.temp = '';
    this.showProgressBar();
    this.flashcardService.putCategory(nameEdit, Id)
      .subscribe(category => {
        this.name = '';
        this.openSnackBarEdit();
        this.categoryId = undefined;
        this.getCategories();
        this.hideProgressBar();
      }, err => {
        console.error(err);
        this.openSnackBarFail();
        this.hideProgressBar();
      });
  }

  cancel(name: string) {
    this.temp = '';
  }

  deleteCategory(id: string) {
    this.clearArrays();
    this.showProgressBar();
    this.temp = '';
    this.flashcardService.deleteCategory(id)
      .subscribe(category => {
        this.categoryId = undefined;
        this.getCategories();
        this.hideProgressBar();
        this.openSnackBarDelete();
      }, err => {
        console.error(err);
        this.categoryId = undefined;
        this.getCategories();
        this.hideProgressBar();
        this.openSnackBarDeleteFail();
      });
  }

  openSnackBarDelete() {
    this.snackBar.open('Category deleted!', '', {
      duration: 2000,
    });
  }

  openSnackBarDeleteFail() {
    this.snackBar.open('You cannot delete this category!', '', {
      duration: 2000,
    });
  }

  openSnackBarEdit() {
    this.snackBar.open('Category updated!', '', {
      duration: 2000,
    });
  }

  openSnackBarFail() {
    this.snackBar.open('Something is wrong!', '', {
      duration: 2000,
    });
  }

}
