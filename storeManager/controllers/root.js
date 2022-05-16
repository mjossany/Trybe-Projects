const express = require('express');
const productsRouter = require('./products/router');
const salesRouter = require('./sales/router');

const root = express.Router({ mergeParams: true });

root.use('/products', productsRouter);
root.use('/sales', salesRouter);

module.exports = root;