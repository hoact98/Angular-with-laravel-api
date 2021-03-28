<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->unsignedbigInteger('orderId');
            $table->unsignedbigInteger('bookId');
            $table->integer('quantity');
            $table->bigInteger('unit_price');
            $table->primary(['orderId', 'bookId']);
            $table->foreign('orderId')->references('id')->on('orders');
            $table->foreign('bookId')->references('id')->on('books');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_details');
    }
}