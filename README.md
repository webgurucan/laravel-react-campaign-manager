# Laravel Campaign Manager with React.js

Campaign manager based on Laravel Framework.
You can easily add, edit a campaign and upload creatives.
Frontend has been implemented by React.js, and the backend is on Laravel framework.

## Features
* add a campaign
* edit / update a campaign
* list campaigns
* upload creatives for a campaign
* slideshow for creatives
* frontend using react.js
* backend using laravel
* unit test implemented

## Requirements
- Git

## Installation on Ubuntu 20.0
In case you installed docker already, then adjust the related settings only.
You can do the following commands in Terminal.

#### 1. Install Source and Laradock
- Go to a directory that you are going to install this project. And clone the project.
```cmd
git clone https://github.com/webgurucan/laravel-react-campaign-manager.git
```
- Go to your project directory and create .env from .env.sample
```cmd
cd laravel-react-campaign-manager
cp .env.example .env
```
- Clone laradock on your project root directory
```cmd
git submodule add https://github.com/Laradock/laradock.git
```
Note: If you are not using Git yet for your project, you can use git clone instead of git submodule
```cmd
git clone https://github.com/Laradock/laradock.git
```
#### 2. Laradock Settings and Run
- Go to your laradock directory and copy .env.example
```cmd
cd laradock
cp .env.example .env
```
- Install docker-compose if needed
```cmd
sudo apt install docker-compose
```
- Run Laradock
```cmd
sudo docker-compose up -d nginx mysql phpmyadmin workspace
```

#### 3. Setup Project
- Create a database that you are going to use
```cmd
sudo docker-compose exec mysql bash
  mysql -uroot -proot
  create database advertising;
  exit
exit
```
- Run workspace and install related packages by composer
```cmd
sudo docker-compose exec workspace bash
composer install
```
- Generate app key and storage link
```cmd
artisan key:generate
artisan storage:link
```
- Database Migration and Seed
```cmd
artisan migrate
artisan db:seed
```

## How to test?
- Run the following command to do unit test.
4 unit tests should be passed.
```cmd
artisan test
```
- After testing, please run the following(DB seeder)
```cmd
php artisan db:seed
```

## How to use
Open your browser and access http://localhost
