export class Category {
    id: Number;
    name: string;
    books?: any[];
    constructor(id: Number, name: string, books: any[] = []){
        this.id = id;
        this.name = name;
        this.books = books;
    }
}