export class Order {
    id: Number;
    customer_name: string;
    customer_email: string;
    customer_phone_number: string;
    customer_address: string;
    total_price: Number;
    order_details?:any;
    constructor(id: Number, customer_name: string,customer_email: string,customer_phone_number:string,customer_address:string,total_price:Number,order_details: any[] = []){
        this.id = id;
        this.customer_name = customer_name;
        this.customer_email = customer_email;
        this.customer_phone_number = customer_phone_number;
        this.customer_address = customer_address;
        this.total_price =total_price;
        this.order_details=order_details
    }
}
