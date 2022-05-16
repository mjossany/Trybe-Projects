const Products = require('../../models/documents')('products');

module.exports = (invProductArrayFiltered, salesQuantities, operation) => {
  invProductArrayFiltered.forEach((obj, index) => {
    const { _id, name, quantity } = obj;
    const { productId, quantity: quantitySale } = salesQuantities[index];
    if (_id.toString() === productId && operation === 'sum') {
      return Products.update({ id: productId, name, quantity: quantity + quantitySale });
    }
    Products.update({ id: productId, name, quantity: quantity - quantitySale });
  });
};