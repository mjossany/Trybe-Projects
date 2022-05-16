const express = require('express');
const { json } = require('body-parser');
const root = require('./src/controllers/root');
const { error } = require('./src/middlewares');

const app = express();

app.use(json());

app.use('/', root);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(error);
