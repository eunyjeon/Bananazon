const productRouter = require('express').Router();
const { Product } = require('../db/models/product');

productRouter.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = productRouter;
