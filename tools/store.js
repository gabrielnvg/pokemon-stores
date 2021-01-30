const flagName = process.argv[2].substring(2);
const type = flagName;
const store = require(`./stores/${type}.json`);

const jsonUrlPrefix = 'https://pokeapi.co/api/v2/';
const jsonProductTypePath = 'type/';

module.exports = {
  type,
  jsonUrl: jsonUrlPrefix.concat(jsonProductTypePath, store.jsonProductTypeId, '/'),
  ...store,
};
