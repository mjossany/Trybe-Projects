const connection = require('../connection');

module.exports = async (collection, document) => {
  const db = await connection();
  const response = await db.collection(collection)
    .insertOne(document);
  return response;
};
