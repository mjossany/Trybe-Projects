const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, recipeId) => {
  const db = await connection();
  const response = await db.collection(collection).findOne({ _id: ObjectId(recipeId) });
  return response;
};