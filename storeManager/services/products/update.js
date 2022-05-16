const Products = require('../../models/documents')('products');

module.exports = async ({ id, name, quantity }) => {
  const response = await Products.update({ id, name, quantity });
  if (response.matchedCount === 1) return { _id: id, name, quantity };
};