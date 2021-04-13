export class OrderDetail {
    orderId: Number;
    bookId: Number;
    quantity: Number;
    unit_price: Number;
    constructor(orderId: Number, bookId: Number,quantity: Number,unit_price:Number){
        this.orderId = orderId;
        this.bookId = bookId;
        this.quantity = quantity;
        this.unit_price = unit_price;
    }
}
