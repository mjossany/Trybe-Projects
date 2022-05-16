const Sales = require('../../models/documents')('sales');
const verifyQuantity = require('./verifyQuantity');
const updateQuantities = require('./updateQuantities');

const verifyIds = require('./verifyIds');

const errorObj = {
  status: 422,
  code: 'invalid_data',
  message: 'Wrong product ID or invalid quantity',
};

module.exports = async (itensSold) => {
  const itensSoldCopy = [...itensSold];
  const allExists = await verifyIds(itensSold);
  if (!allExists) throw errorObj;
  const { invProArrayFiltered, salesQuantities } = await verifyQuantity(itensSoldCopy);
  updateQuantities(invProArrayFiltered, salesQuantities, 'sub');
  const response = await Sales.create({ itensSold });
  return response.ops[0];
};