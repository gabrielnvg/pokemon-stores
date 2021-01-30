const flagName = process.argv[2].substring(2);
const type = flagName;
const store = require(`./stores/${type}.js`);

module.exports = {
  type,
  name: store.APP_NAME,
  color: store.PRIMARY_COLOR,
  jsonProductsTypeId: store.JSON_PRODUCTS_TYPE_ID,
};
