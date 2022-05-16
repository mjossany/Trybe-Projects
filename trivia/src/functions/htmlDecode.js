const htmldecode = (str) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
};

export default htmldecode;
// Thanks for the function https://gist.github.com/yidas/797c9e6d5c856158cffd685b8a8b4ee4
