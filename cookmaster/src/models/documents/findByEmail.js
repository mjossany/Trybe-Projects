const connection = require('../connection');

module.exports = async (collection, email) => {
  const db = await connection();
  const response = await db.collection(collection).findOne({ email });
  return response;
};