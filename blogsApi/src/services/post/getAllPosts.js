const { BlogPost } = require('../../models');

module.exports = async () => {
  const allPosts = await BlogPost.findAll({ include: ['user', 'categories'] });

  return allPosts;
};