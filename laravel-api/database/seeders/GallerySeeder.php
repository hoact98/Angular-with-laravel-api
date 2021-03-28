<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 100; $i++) {
            $item = [
                'bookId'=> rand(1,50),
                'image'=> "images/anh-".rand(1,4).'.jpg'
            ];
            DB::table('galleries')->insert($item);
        }
    }
}