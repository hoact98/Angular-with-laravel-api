<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Book;
class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for($i = 0; $i < 10; $i++){
            $model = new Order();
            $model->customer_name = $faker->name;
            $model->customer_email = $faker->email;
            $model->customer_phone_number = $faker->phoneNumber;
            $model->customer_address = $faker->streetAddress;
            $model->total_price = 0;
            $model->save();
            
            for($j = 0; $j < rand(1, 4); $j++){
                $bookId = $faker->unique()->numberBetween($min = 1, $max = 50);
                $book = Book::find($bookId);
                $model->total_price += $book->price;

                $orderDetailModel = new OrderDetail();
                $orderDetailModel->orderId = $model->id;
                $orderDetailModel->bookId = $book->id;
                $orderDetailModel->quantity = rand(1, 5);
                $orderDetailModel->unit_price = $book->price;
                $orderDetailModel->save();
            }
            // lưu hóa đơn 1 lần nữa để cập nhật tổng số tiền
            $model->save();
        }
    }
}