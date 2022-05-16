const { OK } = require('http-status-codes');
const { putPostById } = require('../../services/post');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { user: { id: reqId } } = req;

    const post = await putPostById({ id, title, content, reqId });

    res.status(OK).json(post);
  } catch (err) {
    next(err);
  }
};