const Sales = require('../../models/documents')('sales');

module.exports = async ({ id, itensSold }) => {
  const response = await Sales.update({ id, itensSold });
  if (response.matchedCount === 1) return { _id: id, itensSold };
};