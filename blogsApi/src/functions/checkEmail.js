module.exports = (email) => {
  const regexEmail = /^[\w_\-.]+@[a-z]+\.[a-z]+(\.[a-z]{2,4})?$/;
  const validEmail = regexEmail.test(email);

  return validEmail;
};
