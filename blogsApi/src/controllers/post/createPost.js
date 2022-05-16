const { CREATED } = require('http-status-codes');
const { createPost } = require('../../services/post');

module.exports = async (req, res, next) => {
  try {
    const { body, user: { id: userId } } = req;

    const createdPost = await createPost({ body, userId });
    
    res.status(CREATED).json(createdPost);
  } catch (err) {
    next(err);
  }
};