export class Book {
    id: Number;
    title: string;
    categoryId: Number;
    authorId: Number;
    detail: string;
    short_desc: string;
    image: string;
    price: Number;
    promotion_price: Number;
    views: Number;
    constructor(id: Number,title:string, categoryId: Number,
        authorId: Number,detail: string, short_desc: string, image:string,price:Number,promotion_price:Number,views:Number){
        this.id = id;
        this.title = title;
        this.categoryId=categoryId;
        this.authorId=authorId;
        this.detail=detail;
        this.short_desc=short_desc;
        this.image=image;
        this.price=price;
        this.promotion_price=promotion_price;
        this.views=views
    }
}