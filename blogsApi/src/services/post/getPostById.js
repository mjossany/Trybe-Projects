const { POST_NOT_FOUND } = require('../../errors');
const { BlogPost, User, Category } = require('../../models');

module.exports = async (userId) => {
  const response = await BlogPost.findOne({ 
    where: { id: userId }, 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },  
    ],
  });

  if (!response) throw POST_NOT_FOUND;

  return response;
};