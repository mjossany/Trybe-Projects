const { OK } = require('http-status-codes');
const { getAllPosts } = require('../../services/post');

module.exports = async (_req, res, next) => {
  try {
    const blogPosts = await getAllPosts();

    res.status(OK).json(blogPosts);
  } catch (err) {
    next(err);
  }
};