const { CATEGORY_NOT_FOUND } = require('../../errors');
const { verifyCategories } = require('../helpers');
const { BlogPost } = require('../../models');

module.exports = async (objectInfos) => {
  const { body: { title, content, categoryIds }, userId } = objectInfos;

  console.log(categoryIds);

  const validsCategories = await verifyCategories(categoryIds);

  if (!validsCategories) throw CATEGORY_NOT_FOUND;

  const response = await BlogPost.create({ title, content, userId });

  await response.addCategories(categoryIds);

  return response;
};