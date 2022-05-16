const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, productId) => {
  const db = await connection();
  const response = await db.collection(collection).deleteOne({ _id: ObjectId(productId) });
  return response;
};