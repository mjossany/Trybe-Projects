const connection = require('../connection');

module.exports = async (collection, productName) => {
  const db = await connection();
  const response = await db.collection(collection).findOne({ name: productName });
  return response;
};