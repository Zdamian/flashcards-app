export class Category {
    public name: string;

    public _id: string;

    constructor(name: string, _id?: string) {
        this.name = name;
        this._id = _id || null;
    }
}
