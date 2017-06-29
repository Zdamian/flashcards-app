import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';

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

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
    this.getCategories();

    this.temp = '';
  }

  clearArrays() {
    this.allCategories = [];
    this.category = <any>{};
  }

  getCategories() {
    this.clearArrays()
    this.flashcardService.getCategories()
      .subscribe(categories => {
        console.log(categories);
        categories.forEach(category => {
          const newCategory = new Category(category.name, category._id);
          this.allCategories.push(newCategory);
          this.categoryId = undefined;
        });
      }, err => {
        console.error(err);
      });
  }

  getCategory(id: string) {
    this.category = <any>{};
    this.temp = '';
    this.flashcardService.getCategory(id)
      .subscribe(category => {
        console.log(category);
        const newCategory = new Category(category.name, category._id);
        this.category = newCategory;
        this.categoryId = undefined;
      }, err => {
        console.error(err);
      });
  }

  editCategory(name: string, id: string) {
    this.name = name;
    this.id = id;
    this.temp = 'editing category';
    console.log(this.name, this.id);
  }

  putCategory(nameEdit: string, id) {
    const Id = this.id;
    console.log(this.name, Id);
    this.flashcardService.putCategory(nameEdit, Id)
      .subscribe(category => {
        this.name = '';
        this.temp = '';
        this.clearArrays()
        this.categoryId = undefined;
        this.getCategories();
      }, err => {
        console.error(err);
      });
  }

  cancel(name: string) {
    this.temp = '';
  }

  deleteCategory(id: string) {
    this.clearArrays()
    this.flashcardService.deleteCategory(id)
      .subscribe(category => {
        console.log(id);
        this.getCategories();
      }, err => {
        console.error(err);
      });
  }

}
