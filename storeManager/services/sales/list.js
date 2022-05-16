const Sales = require('../../models/documents')('sales');

module.exports = async () => {
  const response = await Sales.list();
  return { sales: response };
};
