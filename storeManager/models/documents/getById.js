const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, id) => {
  const db = await connection();
  const product = await db.collection(collection).findOne({ _id: ObjectId(id) });
  return product;
};