# Project: Alimama 🐧

[![Technologies](https://skillicons.dev/icons?i=ts,nestjs,mongodb)](https://skillicons.dev)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## End points

| **Collection** 	| **Method** 	| **Endpoint** 	| **Description** 	|
|---	|---	|---	|---	|
|  **product 🧙‍♂️**  	|  	|  	|  	|
|  	| GET 	| / 	| Get all products 	|
|  	| GET 	| /:id 	| Get single product 	|
|  	| POST 	| / 	| create new product 	|
|  	| PUT 	| /:id 	| update product 	|
|  	| DELETE 	| /:id 	| delete product 	|
|  **category 🧙‍♂️**  	|  	|  	|  	|
|  	| GET 	| / 	| Get all Categories 	|
|  	| GET 	| /:id 	| Get single category 	|
|  	| POST 	| / 	| create new category 	|
|  	| PUT 	| /:id 	| update category 	|
|  	| DELETE 	| /:id 	| delete category 	|
|  **subcategory 🧙‍♂️**  	|  	|  	|  	|
|  	| GET 	| / 	| Get all subcategories 	|
|  	| GET 	| /:id 	| Get single subcategory 	|
|  	| GET 	| /:name 	| Get single subcategory by name 	|
|  	| POST 	| / 	| create new subcategory 	|
|  	| PUT 	| /:id 	| update subcategory 	|
|  	| DELETE 	| /:id 	| delete subcategory 	|
|  **color 🧙‍♂️**  	|  	|  	|  	|
|  	| GET 	| / 	| Get all colors 	|
|  	| GET 	| /:id 	| Get single color 	|
|  	| GET 	| /name/:name 	| Get single color by name 	|
|  	| GET 	| /product/:id 	| Get single color by product 	|
|  	| POST 	| / 	| create new color 	|
|  	| PUT 	| /:id 	| update color 	|
|  	| DELETE 	| /:id 	| delete color 	|
|  **size 🧙‍♂️**  	|  	|  	|  	|
|  	| GET 	| / 	| Get all sizes 	|
|  	| GET 	| /:id 	| Get single size 	|
|  	| GET 	| /name/:name 	| Get single size by name 	|
|  	| GET 	| /color/:id 	| Get single size by color 	|
|  	| POST 	| / 	| create new size 	|
|  	| PUT 	| /:id 	| update size 	|
|  	| DELETE 	| /:id 	| delete size 	|
|  **customer 🧙‍♂️**  	|  	|  	|  	|
|  	| POST 	| /register 	| create new user 	|
|  	| POST 	| /auth 	| authenticate user 	|
|  	| GET 	| /profile 	| user profile info 	|
## Collections

+ Product
```js
name: string,
description: string,
category: ObjectId,
subCategory: ObjectId,
colors: [
  {
    ObjectId,
    sizes: [ObjectId],
  }
]
  ```
+ Category
```js
name: string,
description: string,
image: string
  ```
+ SubCategory
```js
name: string,
description: string,
image: string
category: ObjectId
  ```
+ Color
```js
name: string,
hex: string,
price: number,
images: [string],
provaImg: string
  ```
+ Size
```js
name: string,
quantity: number
  ```
+ User
```js
firstName: string,
lastName: string,
email: string,
emailVerified: boolean,
password: string,
phone: string,
role: string
  ```
+ Customer
```js
gender: string,
birthDate: string5,
avatar: string,
provaImg: string,
active: boolean,
address: {
  addressLine: string,
  city: string,
  country: string;
},
sizes: {
  shoulders: number,
  chest: number,
  waist: number,
  leftArm: number,
  rightArm: number,
  leftLeg: number,
  rightLeg: number,
  torse: number,
  height: number,
},
creditCard: {
  cardNumber: string,
  cvv: number,
  expiryDate: string,
},
wishlist: {
  customer: ObjectId,
  product: [ObjectId]
},
cart: {
  customer: ObjectId,
  product: [ObjectId]
},
reviews: {
  customer: ObjectId,
  product: [ObjectId],
  reviews: [ObjectId]
},
orders: {
  customer: ObjectId,
  product: [ObjectId]
  orders: [ObjectId]
},
  ```

### Still under development....... 🤯
