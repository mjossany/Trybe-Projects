const services = require('../../services/users');

module.exports = async (req, res, _next) => {
  const { name, password, email } = req.body;
  const newUser = {
    name,
    password,
    email,
    role: 'user',
  };
  const response = await services.findByEmail(email);
  if (response) return res.status(409).json({ message: 'Email already registered' });
  const userCreated = await services.createUser(newUser);
  return res.status(201).json({ user: userCreated });
};