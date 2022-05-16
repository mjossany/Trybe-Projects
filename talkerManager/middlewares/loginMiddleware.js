const validateEmail = (email) => {
  if (!email) return 'obrigatorio';
  const regexEmail = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
  if (!email.match(regexEmail)) return false;
  return true;
};

const validatePassword = (password) => {
  if (!password) return 'obrigatorio';
  if (password.length >= 6) return true;
  return false;
};

const validateInfos = (req, res, next) => {
  const { email, password } = req.body;
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  if (isEmailValid === 'obrigatorio') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (isEmailValid === false) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (isPasswordValid === 'obrigatorio') {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (isPasswordValid === false) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  return next();
};

module.exports = validateInfos;
