const config = require('./config');
const axios = require('axios');

const callAPI = (url, params = {}) => {
  return axios.get(url, params)
    .then(response => {
      if (response.data) return response.data;
      throw config.nintendoApi.errors.notFound;
    })
    .then(json => {
      return Promise.resolve(json);
    })
    .catch(err => Promise.reject(err));
};

const game = id => {
  const url = config.nintendoApi.url + config.nintendoApi.routes.game;

  return callAPI(url);
};

const search = (query, options = {}) => {
  return filter({
    search: query,
    ...options,
  });
};

const filter = (options = {}) => {
  const {
    search,
    sort,
    direction,
    system = 'switch',
    limit = 10,
    availability,
    offset,
    category,
    price,
    number,
  } = options;

  const url = config.nintendoApi.url + config.nintendoApi.routes.search;
  const params = {
    search,
    system,
    sort,
    direction,
    limit,
    offset,
    availability,
    category,
    price,
    number,
  };

  return callAPI(url, {params});
};

module.exports = {
  game,
  search,
  filter,
};
