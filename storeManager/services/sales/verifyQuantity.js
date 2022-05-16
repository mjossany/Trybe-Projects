const Products = require('../../models/documents')('products');

const inventoryProductsArray = async (itensSold) => {
  const response = await Promise.all(itensSold.map(async (obj) => Products.getById(obj.productId)));
  return response;
};

const inventoryProductsArrayFiltered = (inventoryProducts) => {
  const array = inventoryProducts.reduce((acc, crrProduct) => {
    const { _id } = crrProduct;
    const exists = acc.some(({ _id: aidi }) => aidi.toString() === `${_id}`);
    if (!exists) return [...acc, crrProduct];
    return acc;
  }, []);
  return array;
};

const salesQuantitiesArray = (itensSold) => {
  const array = itensSold.reduce((acc, crr) => {
    const verification = acc.some((obj) => obj.productId === crr.productId);
    if (!verification) return [...acc, { ...crr }];
    const position = acc.findIndex((obj) => obj.productId === crr.productId);
    acc[position].quantity += crr.quantity;
    return acc;
  }, []);
  return array;
};

const compareValues = (arrObj, arrObj2) => {
  const valid = arrObj.every((obj, index) => obj.quantity >= arrObj2[index].quantity);
  return valid;
};

const errorObj = {
  status: 404,
  code: 'stock_problem',
  message: 'Such amount is not permitted to sell',
};

module.exports = async (itensSold) => {
  const invProArray = await inventoryProductsArray(itensSold);
  const invProArrayFiltered = inventoryProductsArrayFiltered(invProArray); 
  const salesQuantities = salesQuantitiesArray(itensSold);
  const valid = compareValues(invProArrayFiltered, salesQuantities);
  if (!valid) throw errorObj;
  return { invProArrayFiltered, salesQuantities };
};