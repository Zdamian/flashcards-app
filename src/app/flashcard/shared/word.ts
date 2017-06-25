import { Category } from './category';

export class Word {
    public id: string;

    public polish: string;

    public english: string;

    public known: boolean;

    public category: Category;

    constructor(polish: string, english: string, category: Category, known?: boolean, id?: string) {
        this.polish = polish;
        this.english = english;
        this.category = category;
        this.known = known || false;
        this.id = id || null;
    }
}
