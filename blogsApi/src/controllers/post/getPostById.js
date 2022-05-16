const { OK } = require('http-status-codes');
const { getPostById } = require('../../services/post');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await getPostById(id);

    res.status(OK).json(post);
  } catch (err) {
    next(err);
  }
};