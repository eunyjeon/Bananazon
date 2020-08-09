const orderRouter = require('express').Router();
const { Order, OrderItem, Product } = require('../db/models');

orderRouter.get("/:orderId", async (req,res,next) => {
    try {
        const orderId = req.params.orderId;
        const order = await Order.findByPk(orderId, {
            include: [{model: Product}]
        })
        res.json(order); // should send back order instance with orderItem information 
    } catch (error) {
        next(error);
    };
});

// if (user's) order.isPaid is set to true && user clicks on addTo Cart
orderRouter.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create();
    res.json(newOrder);
  } catch (error) {
    next(error);
  }
});

// updating products in OrderItems in specific order
orderRouter.put('/:orderId', async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const updatingThisOrder = await Order.findByPk(orderId, {
        include: [{model: Product}]
    });
    const newInfo = req.body; // get back productId, and quantity
    const updatedOrder = await updatingThisOrder.update(newInfo);
    updatedOrder.save();
    req.json(updatedOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = orderRouter;
