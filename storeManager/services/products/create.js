const Products = require('../../models/documents')('products');
const getByName = require('./getByName');

const errorObj = {
  status: 422,
  code: 'invalid_data', 
  message: 'Product already exists',
};

module.exports = async (product) => {
  const exists = await getByName(product.name);
  if (exists !== null) throw errorObj;

  const response = await Products.create(product);
  return {
    _id: response.insertedId,
    ...product,
  };
};