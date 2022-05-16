const Products = require('../../models/documents')('products');

module.exports = async (productsArray) => {
  const response = await Promise.all(productsArray.map(({ productId }) => 
  Products.getById(productId)));
  const allExist = response.every((obj) => obj !== null);
  return allExist;
};