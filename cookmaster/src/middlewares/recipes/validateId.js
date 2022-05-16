const { ObjectId } = require('mongodb');

module.exports = (req, res, next) => {
  const { id } = req.params;
  const valid = ObjectId.isValid(id);
  if (!valid) return res.status(404).json({ message: 'recipe not found' });
  next();
};