const productRouter = require('express').Router();
const Product = require('../db/models/product');

productRouter.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

productRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleProduct = await Product.findByPk(id);
    res.json(singleProduct);
  } catch (error) {
    next(error);
  }
});
productRouter.put('/:id/increase', async (req, res, next) => {
  try {
    let quantity = await Product.findByPk(req.params.id);
    quantity.quantities++;
    await quantity.save();
    res.json(quantity);
  } catch (error) {
    next(error);
  }
});
productRouter.put('/:id/decrease', async (req, res, next) => {
  try {
    let quantity = await Product.findByPk(req.params.id);
    quantity.quantities--;
    await quantity.save();
    res.json(quantity);
  } catch (error) {
    next(error);
  }
});

module.exports = productRouter;
