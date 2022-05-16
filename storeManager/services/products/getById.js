const Products = require('../../models/documents')('products');

const errorObj = { 
  status: 422, 
  code: 'invalid_data', 
  message: 'Wrong id format',
};

module.exports = async (productId) => {
  const product = await Products.getById(productId);
  if (!product) throw errorObj;
  return product;
};