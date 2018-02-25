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
    .catch(err => Promise.reject(err))
};

const search = (qtitlelike, options = {}) => {
  const {
    qsortBy = 'releaseDate',
    qdirection = 'descend',
    qhardware = 'Nintendo Switch',
  } = options;

  const url = config.nintendoApi.url + config.nintendoApi.routes.search;

  return axios.get(url, {params: {qtitlelike, qhardware,  qsortBy, qdirection}})
    .then(response => {
      if (response.data.game) return response.data.game;
      throw config.nintendoApi.errors.notFound;
    })
    .then(json => {
      return Promise.resolve(json);
    })
    .catch(err => Promise.reject(err))
};

module.exports = {
  getGame,
  search
};