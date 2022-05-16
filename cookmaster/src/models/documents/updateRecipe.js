const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, { id, name, ingredients, preparation, fileUrl }) => {
  const db = await connection();
  const response = await db.collection(collection).updateOne(
    { _id: ObjectId(id) },
    { $set: { name, ingredients, preparation, fileUrl } },
  );
  return response;
};