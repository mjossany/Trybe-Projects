const express = require('express');
const { json } = require('body-parser');
const root = require('./controllers/root');
const error = require('./middlewares/error');

const PORT = 3000;

const app = express();

app.use(json());

app.use('/', root);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
