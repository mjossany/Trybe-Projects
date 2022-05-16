const Products = require('../../models/documents')('products');

module.exports = async () => {
  const productsList = await Products.list();
  return productsList;
};