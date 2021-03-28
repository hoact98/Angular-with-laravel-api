<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 0; $i < 5; $i++) {
            $item = [
                'name' => $faker->unique()->name,
                'created_at'=> now(),
            ];
            DB::table('authors')->insert($item);
        }
    }
}