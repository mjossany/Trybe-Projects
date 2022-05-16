const connection = require('../connection');

module.exports = async (collection) => {
  const db = await connection();
  const response = await db.collection(collection).find().toArray();
  return response;
};