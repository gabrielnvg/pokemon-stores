const flagName = process.argv[2].substring(2);
const type = flagName;
const store = require(`./stores/${type}.json`);

const endpointPrefix = 'https://pokeapi.co/api/v2/';
const endpointTypePath = 'type/';

module.exports = {
  type,
  endpoint: endpointPrefix.concat(endpointTypePath, store.endpointTypeId, '/'),
  ...store,
};
