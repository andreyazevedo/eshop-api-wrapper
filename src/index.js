const config = require('./config');
const axios = require('axios');

const getGame = id => {
  const url = config.nintendoApi.url + config.nintendoApi.routes.game;

  return axios.get(url + id)
    .then(response => {
      if (response.data.game) return response.data.game;
      throw config.nintendoApi.errors.notFound;
    })
    .then(json => {
      return Promise.resolve(json);
    })
    .catch(err => Promise.reject(err));
};

const search = (qtitlelike, options = {}) => {
  const {
    qsortBy = 'releaseDate',
    qdirection = 'descend',
    qhardware = 'Nintendo Switch',
  } = options;

  const url = config.nintendoApi.url + config.nintendoApi.routes.search;

  return axios.get(url, {params: {qtitlelike, qhardware, qsortBy, qdirection}})
    .then(response => {
      if (response.data.game) return response.data.game;
      throw config.nintendoApi.errors.notFound;
    })
    .then(json => {
      return Promise.resolve(json);
    })
    .catch(err => Promise.reject(err));
};

const getLatestGames = (options = {}) => {
  const {
    sort = 'release',
    system = 'switch',
    limit = 10,
    availability = 'new',
  } = options;

  const url = config.nintendoApi.url + config.nintendoApi.routes.filter;

  return axios.get(url, {params: {sort, system, limit, availability}})
    .then(response => {
      if (response.data.games) return response.data.games;
      throw config.nintendoApi.errors.notFound;
    })
    .then(json => {
      return Promise.resolve(json);
    })
    .catch(err => Promise.reject(err));
};

module.exports = {
  getGame,
  search,
  getLatestGames,
};
