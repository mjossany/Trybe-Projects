const jwt = require('jsonwebtoken');
const services = require('../../services/login');

const secret = 'cookmasterpassword';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
  
    const response = await services.login(email);
    if (!response) return res.status(401).json({ message: 'Incorrect username or password' });
    const { role, _id, password: savedPassword } = response;
    if (savedPassword !== password) {
      return res.status(401)
        .json({
          message: 'Incorrect username or password',
        });
    }
  
    const token = jwt.sign({ _id, role, email }, secret, jwtConfig);
  
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};