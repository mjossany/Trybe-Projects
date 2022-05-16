const Sales = require('../../models/documents')('sales');
const verifyQuantity = require('./verifyQuantity');
const updateQuantities = require('./updateQuantities');

const errorObj = {
  status: 422,
  code: 'invalid_data',
  message: 'Wrong sale ID format',
};

module.exports = async (saleId) => {
  const sale = await Sales.getById(saleId);
  const { itensSold } = sale;
  if (sale === null) throw errorObj;
  const { invProArrayFiltered, salesQuantities } = await verifyQuantity(itensSold);
  updateQuantities(invProArrayFiltered, salesQuantities, 'sum');
  const { deletedCount } = await Sales.remove(saleId);
  
  if (deletedCount) return sale;
};