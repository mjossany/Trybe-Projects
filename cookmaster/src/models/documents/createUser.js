const connection = require('../connection');

module.exports = async (collection, document) => {
  const db = await connection();
  const { ops } = await db.collection(collection).insertOne(document);
  return ops[0];
};