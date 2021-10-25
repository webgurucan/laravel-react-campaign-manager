<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BasicTest extends TestCase
{
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
     * Check if you can connect to database
     * and see if there is campaigns table
     *
     * @return void
     */
    public function test_connecting_database()
    {
        $this->assertDatabaseHas('campaigns', []);
    }
}
