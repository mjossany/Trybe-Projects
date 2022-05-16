const saveInfoLocalStorage = (name, email, score = 0, assertions = 0) => {
  const coisaqualquerai = {
    player: {
      name,
      assertions,
      score,
      gravatarEmail: email,
    },
  };
  localStorage.setItem('state', JSON.stringify(coisaqualquerai));
};

export default saveInfoLocalStorage;
