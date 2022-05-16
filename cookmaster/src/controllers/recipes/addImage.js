const services = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { file } = req;
    const fileUrl = `localhost:3000/${file.path}`;
    const objInfos = { id, fileUrl, userInfos: { ...req.loggedUserInfos } };
    const response = await services.addImage(objInfos);
    if (response) { 
      return res.status(200).json({ 
      _id: id,
      ...response,
      image: fileUrl,
      });
    }
  } catch (err) {
    next(err);
  }
};