<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Check if apache is running.
     *
     * @return void
     */
    public function test_connecting_homepage()
    {
        //Home page check
        $response = $this->get('/');
        $response->assertStatus(200);
        $response->assertSee('Campaigns by Ron Bo');
    }

    /**
     * Test if you can add a campaign fully
     */
    public function test_add_campaign()
    {
        $response = $this->postJson(
            '/api/campaign/store',
            [
                'name' => 'Test Campaign - Google Ads',
                'from' => '2021-10-01',
                'to' => '2021-10-31',
                'total_budget' => '1000',
                'daily_budget' => '50',
            ]
        );

        $response
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);
    }

    /**
     * Test if you can get the campaigns
     *
     * @return void
     */
    public function test_get_campaigns()
    {
        //add a campaign
        $response = $this->postJson(
            '/api/campaign/store',
            [
                'name' => 'Test Campaign - Google Ads',
                'from' => '2021-10-01',
                'to' => '2021-10-31',
                'total_budget' => '1000',
                'daily_budget' => '50',
            ]
        );

        //Get all campaigns
        $response = $this->get('/api/campaigns');

        $response
            ->assertStatus(200)
            ->assertJson([
                ['name' => 'Test Campaign - Google Ads'],
            ]);
    }


    /**
     * Test if you can upload creatives
     *
     * @return void
     */
    public function test_upload_creatives()
    {
        Storage::fake('local');
        $file = UploadedFile::fake()->image('avatar.png');
        $response = $this->post('/api/campaign/uploadfile', [
            'file' => [$file],
        ]);

        Storage::disk('local')->assertExists('/public/campaign/' . $file->hashName());

        $response
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);
    }
}
