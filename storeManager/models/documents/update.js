const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, { id, name, quantity, itensSold }) => {
  const db = await connection();
  if (itensSold) {
    const response = await db.collection(collection).updateOne(
      { _id: ObjectId(id) }, 
      { $set: { itensSold } },
    );
    return response;
  }
  const response = await db.collection(collection).updateOne(
    { _id: ObjectId(id) }, 
    { $set: { name, quantity } },
  );
  return response;
};