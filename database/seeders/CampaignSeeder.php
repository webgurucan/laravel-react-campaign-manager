<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CampaignSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('campaigns')->insert([
            [
                'name' => 'A Google Ads - Dell Computer',
                'from' => '2021-04-03',
                'to' => '2021-04-13',
                'total_budget' => 500,
                'daily_budget' => 5,
                'creatives' => 'https://media.istockphoto.com/photos/vintage-and-retro-desktop-computer-picture-id1300036679?s=612x612|https://media.istockphoto.com/photos/old-classic-computer-picture-id183759387?s=612x612'
            ],

            [
                'name' => 'Trello Ads - Sony Computer',
                'from' => '2021-02-03',
                'to' => '2021-04-23',
                'total_budget' => 1000,
                'daily_budget' => 50,
                'creatives' => 'http://google.com/logos/doodles/2021/galina-vishnevskayas-95th-birthday-6753651837109118.2-l.png'
            ],

            [
                'name' => 'Skype Ads - Microsoft Notebook',
                'from' => '2021-08-03',
                'to' => '2021-09-13',
                'total_budget' => 6000,
                'daily_budget' => 200,
                'creatives' => 'https://media.istockphoto.com/photos/vintage-and-retro-desktop-computer-picture-id1300036679?s=612x612'
            ],

            [
                'name' => 'Facebook Ads - Dell Display',
                'from' => '2021-10-03',
                'to' => '2021-10-23',
                'total_budget' => 1300,
                'daily_budget' => 30,
                'creatives' => 'https://media.istockphoto.com/photos/retro-monitor-and-blue-keyboard-with-mouse-on-a-light-background-picture-id1338303975'
            ],
            
        ]);
    }
}
