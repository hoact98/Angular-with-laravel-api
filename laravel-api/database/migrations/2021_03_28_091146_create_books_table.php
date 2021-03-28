<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title')->unique();
            $table->unsignedBigInteger('categoryId');
            $table->foreign('categoryId')->references('id')->on('categories');
            $table->unsignedBigInteger('authorId');
            $table->foreign('authorId')->references('id')->on('authors');
            $table->text('detail');
            $table->text('short_desc')->nullable();
            $table->string('image',191)->default('images/default.jpg');
            $table->integer('price')->default(0);
            $table->integer('promotion_price')->default(0);
            $table->integer('views')->default(0);  
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
        Schema::dropIfExists('books');
    }
}