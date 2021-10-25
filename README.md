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

## Preparation
You should install PHP, composer, node.js and Apache/Mysql server.
And you should adjust the related path, so you can run them all in command.

## Installation

Please run all commands in your project root directory.

### 1. Get Source
- Go to the document root of your apache server.
- Get the source from git
#### Get the source from Git
```git
git clone https://github.com/anydev1103/laravel-drag-drop-taskmanager.git
```
### 2. Install the laravel framework by the following:
- Composer install
```cmd
composer install
```
- NPM install
```cmd
npm install
```

### 3. Create a database named "campaign"

### 4. Make .env file from .env.example
- Copy ".env.example" and paste in same root directory.
- Rename it to ".env"
- Update the DB config in ".env" file. Please set database, username, password, and related sections too.
```txt
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=campaign
DB_USERNAME=root
DB_PASSWORD=root
```
- Create app key by running the following command in cmd
```cmd
php artisan key:generate
```
- Make the storage link, so the uploaded creatives will be display successfully.
```cmd
php artisan storage:link
```
### 5. Migrate database and update the database by seeder
- To migrate, run the following command in your project root directory
```cmd
php artisan migrate
```
- To seed, run the following command in your project root directory
```cmd
php artisan db:seed
```

## How to test
- Run the following command to do unit test.
```cmd
php artisan test
```
4 unit tests should be passed.

- After testing, please run the following again (DB seeder)
It will seed the database again with seeder.
```cmd
php artisan db:seed
```
## How to use on Laradock (Docker)

git clone https://github.com/anydev1103/laravel-react-campaign-manager.git
cd laravel-react-campaign-manager
git clone https://github.com/Laradock/laradock.git
cd laradock
cp .env.example .env

sudo apt install docker-compose
sudo docker-compose up -d nginx mysql phpmyadmin workspace  //Running docker
sudo docker-compose up -d --build nginx mysql
sudo docker-compose exec workspace bash //then you can see it works


//Create Database after running docker
sudo docker-compose exec mysql bash
  mysql -uroot -proot
  create database advertising;
  exit
exit

sudo docker-compose exec workspace bash

composer install
		npm install //Dev purpose
artisan key:generate
artisan storage:link

set DB_HOST=mysql in .env

artisan migrate
artisan db:seed
artisan test
artisan db:seed



You can access mysql
http://localhost:8081/ 





docker-compose up -d --build nginx mysql phpmyadmin

docker-compose down
docker-compose up -d --build nginx phpmyadmin

docker-compose exec mysql bash

  mysql -uroot -proot
  create database advertising;
  exit

exit



## How to use
Open your browser and access http://localhost



=============================================

docker command guide
how to init system test

//Test



TODO:
docker - Laradock