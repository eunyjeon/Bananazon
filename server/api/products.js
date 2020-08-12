const productRouter = require('express').Router();
const Product = require('../db/models/product');
const OrderItem = require('../db/models/orderItem');
const { isAdmin } = require('../serverUtils');

productRouter.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

const { Op } = require('sequelize');
// sending back the products information requested for the cart compoenent - visitor - local storage
// maybe move to differnet file
productRouter.get('/cart', async (req, res, next) => {
  try {
    const arrOfProductIds = req.body;
    const products = await Product.findAll({
      where: {
        id: {
          [Op.or]: arrOfProductIds,
        },
      },
    });
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
    let subtotal = await OrderItem.findAll({
      where: { productId: req.params.id },
    });
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

// router.delete('/:id', isAdmin, async (req, res, next) => {
//   const productId = +req.params.id;
//   try {
//     await Product.destroy({
//       where: {
//         id: productId,
//       },
//     });
//     res.sendStatus(200);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = productRouter;
