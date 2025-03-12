***

<h1 align="center">
Applications Development and Emerging Technologies (CC223)
</h1>
<h2 align="center">
Week 3 Laboratory: API Development & Microservices
</h2>

***

This project is a simple <b>RESTful API</b> with user authentication and deploying microservices using <b>Node.js</b>, <b>Express</b>, and <b>JWT authentication</b>.

Software used:
1. Visual Studio Code
2. Node.js
3. Postman

Packages used:
<br>
```express```, ```bcryptjs```, ```dotenv```, ```jsonwebtoken```, and ```body-parser```

***

## Table of Contents

* [Downloading and Installing](#downloading-and-installing)
* [JavaScript Files](#javascript-files)
* [Endpoints and Microservices](#endpoints-and-microservices)
* [Example Links](#example-links)

***

## Downloading and Installing

- A code editor like <a href="https://code.visualstudio.com/">Visual Studio Code</a>.
- A JavaScript runtime environment like <a href="https://nodejs.org/">Node.js</a>.
- An API platform like <a href="https://www.postman.com/">Postman</a>.

<br>

## JavaScript Files

### ```server.js```
  This file is responsible for allowing users to register or log in with their ```username``` and ```password```. If they are registering, then the ```password``` is hashed so that it is encrypted when it is stored instead of being in plain text. It prompts the users that they are successfully registered. If they are logging in, then the ```username``` and ```password``` is compared to what is stored. If the match is successful, then they are given a token that is a ```SECRET_KEY``` that expires in 1 hour as a middleware to authenticate the JWT. Otherwise, the login fails and prompts the user that their credentials are invalid. After logging in, the users can access the protected route that only users that are logged in are able to.

### ```auth-service.js```
  This file contains the list of users, with their ```id```, ```username```, and ```password```. It authenticates the user if it matches the credentials that are stored, otherwise, it prompts the user that the credentials are invalid.

### ```product-service.js```
  This file is a ```.json``` file that contains list of products, with their ```id``` and ```name```.

<br>

## Endpoints and Microservices

### ```/api/register```
  This endpoint is where the user registers with their ```username``` and ```password``` of their choice.

### ```/api/login```
  This endpoint is where the user logs in with their ```username``` and ```password```. If the login is successful, then they are given a token that will be used to access the protected route.

### ```/api/protected```
  This endpoint gives a message that tells the user that they have successfully accessed the protected route.

### ```/api/products```
  This endpoint neatly arranges the list of products with their ```id``` and ```name```.

<br>

## Example Links

1. ```/api/register```: ```http://localhost:3000/api/register```
2. ```/api/login```: ```http://localhost:3000/api/login```
3. ```/api/protected```: ```http://localhost:3000/api/protected```
4. ```/api/products```: ```http://localhost:4000/api/products```

***
