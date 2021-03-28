<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $table = "books";
    
    protected $fillable = [
        'title', 'price', 'views', 'categoryId',
        'promotion_price', 'detail','short_desc','authorId','image',
    ];
   
    public function category()
    {
        return $this->belongsTo(Category::class, 'categoryId');
    }
    public function author()
    {
        return $this->belongsTo(Author::class, 'authorId');
    }
    //doanh số của từng sản phẩm
    public function order_details()
    {
        return $this->hasMany(OrderDetail::class,'bookId');
    }
}