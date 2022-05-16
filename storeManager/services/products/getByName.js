const Products = require('../../models/documents')('products');

module.exports = async (name) => {
  const found = await Products.getByName(name);
  return found;
};