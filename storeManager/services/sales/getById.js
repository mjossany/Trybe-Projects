const Sales = require('../../models/documents')('sales');

const errorObj = { 
  status: 404, 
  code: 'not_found', 
  message: 'Sale not found',
};

module.exports = async (saleId) => {
  const product = await Sales.getById(saleId);
  if (!product) throw errorObj;
  return product;
};