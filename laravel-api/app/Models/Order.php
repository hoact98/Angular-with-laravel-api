<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $table='orders';
    protected $fillable = [
        'customer_name', 'customer_email','customer_phone_number','total_price','customer_address'
    ];
    public function order_details(){
        return $this->hasMany(OrderDetail::class,'orderId');
    }

    public function books()
    {
        return $this->belongsToMany(Book::class,'order_details','orderId','bookId');
    }
}