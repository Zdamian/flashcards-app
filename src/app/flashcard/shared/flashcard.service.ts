import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface ICategory {
  _id: string;
  name: string;
}

export interface IWord {
  _id: string;
  polish: string;
  english: string;
  known: boolean;
  category: ICategory[];
}

@Injectable()
export class FlashcardService {

  private api = 'http://127.0.0.1:5551';

  constructor(private http: Http) { }

  public getFlashcards(category: string): Observable<IWord[]> {

    const url = this.getUrl('flashcards', category)
    return this.http.get(url)
      .map(res => <IWord[]>res.json())
      .catch(this.handleError);
  }

  public getCategories(): Observable<ICategory[]> {

    const url = this.getUrl('categories');
    return this.http.get(url)
      .map(res => <ICategory[]>res.json())
      .catch(this.handleError);
  }

  public getWords(): Observable<IWord[]> {

    const url = this.getUrl('words');
    return this.http.get(url)
      .map(res => <IWord[]>res.json())
      .catch(this.handleError);
  }

  public getCategory(id: string): Observable<ICategory> {

    const url = this.getUrl('categories', id)
    return this.http.get(url)
      .map(res => <ICategory>res.json())
      .catch(this.handleError);
  }

  public getWord(id: string): Observable<IWord> {

    const url = this.getUrl('words', id)
    return this.http.get(url)
      .map(res => <IWord>res.json())
      .catch(this.handleError);
  }

  private getUrl(endpoint: string, param?: string | number): string {

    const url = `${this.api}/${endpoint}`;
    return param ? `${url}/${param}` : url;
  }

  private handleError (error: Response) {

    return Observable.throw(error.json().error || 'Server error');
  }

}