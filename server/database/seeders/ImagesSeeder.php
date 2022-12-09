<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class ImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Schema::disableForeignKeyConstraints();
        DB::table('images')->truncate();
        //
        $images = [
            [1,'https://bucket.nhanh.vn/store/7534/ps/20220813/22083039x.jpg'],
            [1,'https://bucket.nhanh.vn/store/7534/ps/20220813/22083039xx.jpg'],
            [1,'https://bucket.nhanh.vn/store/7534/ps/20220813/22083039.jpg'],
            [2, 'https://bucket.nhanh.vn/store/7534/ps/20220819/22080216x.jpg'],
            [2,'https://bucket.nhanh.vn/store/7534/ps/20220819/22080216.jpg'],
            [3,'https://bucket.nhanh.vn/store/7534/ps/20220811/22073360.jpg'],
            [3,'https://bucket.nhanh.vn/store/7534/ps/20220811/22073360x.jpg'],
            [4,'https://bucket.nhanh.vn/store/7534/ps/20220811/22070604.jpg'],
            [4,'https://bucket.nhanh.vn/store/7534/ps/20220811/22070604x.jpg'],
            [4,'https://bucket.nhanh.vn/store/7534/ps/20220811/22070604xx.jpg'],
            [4,'https://bucket.nhanh.vn/store/7534/ps/20220811/22070604xxx.jpg'],
            [5,'https://bucket.nhanh.vn/store/7534/ps/20220819/22080217x.jpg'],
            [5,'https://bucket.nhanh.vn/store/7534/ps/20220819/22080217.jpg'],
            [6,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080235xl.jpg'],
            [7,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080235d.jpg'],
            [7,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080235d1.jpg'],
            [8,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080236xl.jpg'],
            [8,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080236xl1.jpg'],
            [9,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080236d.jpg'],
            [9,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080236d1.jpg'],
            [10,'https://bucket.nhanh.vn/store/7534/ps/20220831/22083205xx.JPG'],
            [10,'https://bucket.nhanh.vn/store/7534/ps/20220831/22083205.JPG'],
            [10,'https://bucket.nhanh.vn/store/7534/ps/20220831/22083205x.JPG'],
            [11,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080374b.jpg'],
            [11,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080374b1.jpg'],
            [11,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080374b2.jpg'],
            [12,'https://bucket.nhanh.vn/store/7534/ps/20220821/22080374d.jpg'],
            [13,'https://bucket.nhanh.vn/store/7534/ps/20220921/22093122.JPG'],
            [13,'https://bucket.nhanh.vn/store/7534/ps/20220921/22093122x.JPG'],
            [14,'https://bucket.nhanh.vn/store/7534/ps/20220814/22073427d.JPG'],
            [14,'https://img.cdn.vncdn.io/nvn/ncdn/store/7534/psCT/20220729/37580199/22073427d1.jpg'],
            [15,'https://img.cdn.vncdn.io/nvn/ncdn/store/7534/psCT/20220729/37580197/22073426xb.jpg'],
            [15,'https://img.cdn.vncdn.io/nvn/ncdn/store/7534/psCT/20220729/37580197/22073426x.jpg'],
            [16,'https://bucket.nhanh.vn/store/7534/ps/20220928/22093282.JPG'],
            [16,'https://bucket.nhanh.vn/store/7534/ps/20220928/22093282x.JPG'],
            [17,'https://bucket.nhanh.vn/store/7534/ps/20220625/22060131.JPG'],
            [18,'https://bucket.nhanh.vn/store/7534/ps/20220722/22062182.JPG'],
            [19,'https://bucket.nhanh.vn/store/7534/ps/20220723/22062021.jpg'],
            [19,'https://bucket.nhanh.vn/store/7534/ps/20220721/22062021.jpg'],
            [19,'https://bucket.nhanh.vn/store/7534/ps/20220723/22062021x.JPG'],
            [19,'https://bucket.nhanh.vn/store/7534/ps/20220723/22062021xx.jpg'],
            [20,'https://bucket.nhanh.vn/store/7534/ps/20220722/22062207.jpg'],
            [21,'https://bucket.nhanh.vn/store/7534/ps/20220721/22062024d.jpg'],
            [22,'https://bucket.nhanh.vn/store/7534/ps/20220722/22062205.png'],
            [23, 'https://bucket.nhanh.vn/store/7534/ps/20220722/22062206.jpg'],
            [24, 'https://bucket.nhanh.vn/store/7534/ps/20221010/22100135.jpg'],
            [25,'https://bucket.nhanh.vn/store/7534/ps/20221026/22100461.JPG'],
            [26,'https://bucket.nhanh.vn/store/7534/ps/20221024/22103149.jpg']
        ];

        foreach ($images as $image) {
            DB::table('images')->insert([
                'id_prod' => $image[0],
                'URL' => $image[1],
            ]);
        }
        
        Schema::enableForeignKeyConstraints();
    }
}