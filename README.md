# Eshop API Wrapper

> API Wrapper to get information from Nintendo Eshop.

## Get Starded

Install the package with NPM and add it to your dependencies:

    $ npm install eshop-api-wrapper --save

## Example

```javascript
const eshop = require('eshop-api-wrapper');

eshop.search('Zelda')
  .then(data => console.log(data))
  .catch(err => console.error(err))
```

## Methods

### `game(id)`
- The **ID** is provided by the Nintendo API and your format is something like that `GHbaBYuv3zqQeW1CVQlmTSehZ45KTV78`.

### `search(query, {options})`
- __query:__ The search term.
- __options.sort:__ default: `release`. Order of results. Can be `relevance`, `release`, `title` and `price`.
- __options.direction:__ default: `desc`. Can be `asc` or `des`.
- __options.system:__ default: `switch`. Nintendo system. Can be `ds`, `3ds`, `wii`, `wii_u`, `ios`, `android`, `ios_android` and `switch`.
- __options.limit:__ default: `10`. Limit of search results. Max value is `200`.
- __options.availability:__ Status of the game availability. Can be `now`, `new`, `soon` and `prepurchase`.
- __options.offset:__ default: `0`. Change the position of the search. Useful to pagination.
- __options.category:__ Can be `action_adventure`, `application`, `first_person`, `party`, `role_playing`, `music_fitness`, `education`, `puzzle_strategy`, `simulation` and `sports_racing`.
- __options.price:__ Can be `4.99`, `9.99`, `19.99`, `39.99` and `40_plus`.
- __options.number:__ Filter by number of players. Can be `1`, `2`, `3` and `4`.

### `filter({options})`
- __options.sort:__ default: `release`. Order of results. Can be `relevance`, `release`, `title` and `price`. 
- __options.direction:__ default: `desc`. Can be `asc` or `des`.
- __options.system:__ default: `switch`. Nintendo system. Can be `ds`, `3ds`, `wii`, `wii_u`, `ios`, `android`, `ios_android` and `switch`.
- __options.limit:__ default: `10`. Limit of search results. Max value is `200`.
- __options.availability:__ Status of the game availability. Can be `now`, `new`, `soon` and `prepurchase`.
- __options.offset:__ default: `0`. Change the position of the search. Useful to pagination.
- __options.category:__ Can be `action_adventure`, `application`, `first_person`, `party`, `role_playing`, `music_fitness`, `education`, `puzzle_strategy`, `simulation` and `sports_racing`.
- __options.price:__ Can be `4.99`, `9.99`, `19.99`, `39.99` and `40_plus`.
- __options.number:__ Filter by number of players. Can be `1`, `2`, `3` and `4`.
