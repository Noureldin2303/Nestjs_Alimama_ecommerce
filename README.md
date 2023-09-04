<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

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

# Project: MAKASK 👩‍🚀

## Collection: `product` 📁

## Product Endpoints 🧙‍♂️

### Get All Products ( `Method: GET` )

> ```
> domain/product
> ```

### Get Single Product ( `Method: GET` )

> ```
> domain/product/:id
> ```

### Create Product ( `Method: POST` )

> ```
> domain/product/
> ```

### Body (**raw**)

```json
{
  "name": "testduct",
  "category": {
    "name": "Men",
    "description": "description category",
    "image": "images"
  },
  "subCategory": {
    "name": "pants",
    "description": "description subcategory",
    "image": "images"
  },
  "description": "description",
  "colors": [
    {
      "name": "yellow",
      "hex": "#090907",
      "sizes": [
        {
          "name": "s",
          "quantity": 120
        },
        {
          "name": "l",
          "quantity": 20
        }
      ],
      "price": 321,
      "images": ["img1"],
      "provaImg": "img1"
    }
  ]
}
```

### Update Product ( `Method: PUT` )

> ```
> domain/product/:id
> ```

### Body (**raw**)

```json
{
  "name": "product 7",
  "category": {
    "name": "Men2",
    "description": "description",
    "image": "images2"
  },
  "subCategory": {
    "name": "T-shirts",
    "description": "description",
    "image": "images"
  },
  "description": "description",
  "colors": [
    {
      "name": "blue",
      "hex": "#isbvibv",
      "sizes": [
        {
          "name": "l",
          "quantity": 12
        }
      ],
      "price": 321,
      "images": ["img1", "img2"],
      "provaImg": "img1"
    },
    {
      "name": "red",
      "hex": "#32636262",
      "sizes": [
        {
          "name": "xl",
          "quantity": 120
        }
      ],
      "price": 235,
      "images": ["img1"],
      "provaImg": "img1"
    }
  ]
}
```

### Delete Product ( `Method: DELETE` )

> ```
> domain/product/:id
> ```

<br/><br/>

## Category Endpoints 🧙‍♂️

### Get All Category ( `Method: GET` )

> ```
> domain/category
> ```

### Get Single Category ( `Method: GET` )

> ```
> domain/category/:id
> ```

### Delete Category ( `Method: DELETE` )

> ```
> domain/category/:id
> ```

### Update Category ( `Method: PUT` )

> ```
> domain/category/:id
> ```

### Body (**raw**)

```json
{
  "name": "Men",
  "description": "description men category",
  "image": "image men category update"
}
```

### Create Category ( `Method: POST` )

> ```
> domain/category
> ```

### Body (**raw**)

```json
{
  "name": "Women",
  "description": "description women category",
  "image": "image women category"
}
```

### Get Category By name ( `Method: GET` )

> ```
> domain/category/name/Women
> ```

<br/><br/>

## SubCategory Endpoints 🧙‍♂️

### Create Subcategory ( `Method: POST` )

> ```
> domain/subcategory
> ```

### Body (**raw**)

```json
{
  "name": "pants",
  "description": "description tshirts subcategory",
  "image": "image tshirts subcategory",
  "category": "Kids"
}
```

### Get All Subcategory ( `Method: GET` )

> ```
> domain/subcategory
> ```

### Get Single Subcategory ( `Method: GET` )

> ```
> domain/subcategory/:id
> ```

### Update Subcategory ( `Method: PUT` )

> ```
> domain/subcategory/:id
> ```

### Body (**raw**)

```json
{
  "name": "sweatshirts",
  "description": "description tshirts subcategory",
  "image": "image tshirts subcategory update"
}
```

### Delete Subcategory ( `Method: DELETE` )

> ```
> domain/subcategory/:id
> ```

### Get Subcategory By Name ( `Method: GET` )

> ```
> domain/subcategory/sweatshirts
> ```

<br/><br/>

## Colors Endpoints 🧙‍♂️

### Get All Colors ( `Method: GET` )

> ```
> domain/color
> ```

### Get By Name ( `Method: GET` )

> ```
> domain/color/name/purple
> ```

### Get By Product ( `Method: GET` )

> ```
> domain/color/product/:id
> ```

### Get By id ( `Method: GET` )

> ```
> domain/color/:id
> ```

### Delete Color ( `Method: DELETE` )

> ```
> domain/color/:id
> ```

### Update Color ( `Method: PUT` )

> ```
> domain/color/:id
> ```

### Body (**raw**)

```json
{
  "name": "black",
  "hex": "#000000",
  "price": 30,
  "images": ["img1", "img2", "img3"],
  "provaImg": "prova image"
}
```

<br/><br/>

## Sizes Endpoints 🧙‍♂️

### Get All Sizes ( `Method: GET` )

> ```
> domain/size
> ```

### Get By id ( `Method: GET` )

> ```
> domain/size/:id
> ```

### Get By Color ( `Method: GET` )

> ```
> domain/size/color/:id
> ```

### Get By Name ( `Method: GET` )

> ```
> domain/size/name/s
> ```

### Update Size ( `Method: PUT` )

> ```
> domain/size/:id
> ```

### Body (**raw**)

```json
{
  "name": "s",
  "quantity": 20
}
```

### Delete Size ( `Method: DELETE` )

> ```
> domain/size/:id
> ```


## License

Nest is [MIT licensed](LICENSE).
