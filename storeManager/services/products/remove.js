const Products = require('../../models/documents')('products');

const errorObj = {
  status: 422,
  code: 'invalid_data',
  message: 'Wrong id format',
};

module.exports = async (productId) => {
  const product = await Products.getById(productId);
  if (product === null) throw errorObj;
  const { deletedCount } = await Products.remove(productId);
  return { deletedCount, ...product };
};