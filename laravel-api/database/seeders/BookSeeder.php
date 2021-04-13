<?php

namespace Database\Seeders;
use Faker;
use Illuminate\Support\Facades\DB;

use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 0; $i < 50; $i++) {
            $item = [
                'title' => $faker->name,
                'categoryId'=> rand(1,5),
                'authorId'=> rand(1,5),
                'image'=> "images/book-".rand(1,4).'.jpg',
                'price'=> $faker->numberBetween($min = 1000, $max = 1000000),
                'views'=> $faker->numberBetween($min = 0, $max = 200),
                'detail' => $faker->realText(150, 2),
                'short_desc' => $faker->realText(50, 2),
                'created_at'=> now(),
            ];
            DB::table('books')->insert($item);
        }
    }
}