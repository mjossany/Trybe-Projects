const connection = require('../connection');

module.exports = async (collection, { name, ingredients, preparation, userIdentification }) => {
  const db = await connection();
  const response = await db.collection(collection).insertOne({
    name,
    ingredients,
    preparation,
    userId: userIdentification,
  });
  return response;
};