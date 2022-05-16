const { UNAUTHORIZED_USER } = require('../../errors');
const { BlogPost, Category } = require('../../models');

module.exports = async (postInfos) => {
  const { id: userId, title, content, reqId } = postInfos;

  await BlogPost.update({ title, content }, { where: { userId } });

  const updatedPost = await BlogPost.findOne({
    where: { id: userId },
    include: { model: Category, as: 'categories', through: { attributes: [] } },
  });

  const { id } = updatedPost;

  if (reqId !== id) throw UNAUTHORIZED_USER;

  return updatedPost;
};