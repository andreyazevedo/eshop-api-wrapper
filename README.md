# Eshop API Wrapper

> API Wrapper to get information from Nintendo Eshop.

## Installation

Install package with NPM and add it to your dependencies:

    $ npm install eshop-api-wrapper --save

## Usage

```javascript
var eshopApi = require('eshop-api-wrapper');

eshopApi.search('Zelda')
  .then(data => console.log(data))
  .catch(err => console.error(err))

eshopApi.getGame('GHbaBYuv3zqQeW1CVQlmTSehZ45KTV78')
  .then(data => console.log(data))
  .catch(err => console.error(err))
```
