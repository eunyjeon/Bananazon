const orderRouter = require("express").Router();
const { Order, OrderItem, Product } = require("../db/models");

// // after clicking on addToCart btn or loggin in, look to see if user has a order that is not paid yet
// // if yes, return the order information
// // if no, return a new order instance
// orderRouter.put("/", async (req, res, next) => {
//   try {
//     // should send userId in some form from axios request
//     const userId = req.body;
//     const orderInfo = await Order.findOrCreate({
//       where: {
//         userId,
//         isPaid: false
//       },
//       include: [{ model: Product }],
//       defaults: {
//         userId,
//         isPaid: false,
//         totalPrice : 0
//       }
//     })
//     res.json(orderInfo); // should send back order instance with orderItem information
//   } catch (error) {
//     next(error);
//   }
// });

// this is to get the orderId of the cart!!!!!!!!!!!!!!!!!!
orderRouter.get("/", async (req, res, next) => { // LET TAIHUA KNOW I CHANGED EAGERLY LOADING TO ORDERITEM
  try {
    let {userId} = req.body[0];

    const notPaidOrders = await Order.findAll({
      where: {
        isPaid: false,
        userId,
      },
      include: [{ model: Product }],
    });

    if (notPaidOrders.length < 1) {
      res.json({});
    } else {
      console.log('THIS IS WHATTTTTTTTTTTTTTTTTTTTT:', notPaidOrders)
      res.json(notPaidOrders);
    }

    // change to send orderId if there is one, else tell it send back undefined?
  } catch (error) {
    next(error);
  }
});

orderRouter.get("/cart/:userId", async (req, res, next) => {
  try {
    let userId = req.params.userId;

    const notPaidOrders = await Order.findAll({
      where: {
        isPaid: false,
        userId
      },
      include: [{ model: Product }],
    });

    console.log(notPaidOrders);
    if (notPaidOrders.length < 1) {
      res.json(false);
    } else {
      res.json(notPaidOrders);
    }

    // change to send orderId if there is one, else tell it send back undefined?
  } catch (error) {
    next(error);
  }
});

// To get the specific order instance/cart info
orderRouter.get("/:orderId", async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findByPk(orderId, {
      include: [{ model: Product }],
    });
    res.json(order); // should send back order instance with orderItem information
    
  } catch (error) {
    next(error);
  }
});

// if (user's) order.isPaid is set to true && user clicks on addTo Cart
orderRouter.post("/", async (req, res, next) => {
  try {
    const userId = req.body;
    const newOrder = await Order.create(userId);
    res.json(newOrder);

  } catch (error) {
    next(error);
  }
});

// updating products in OrderItems in specific order
orderRouter.put("/:orderId", async (req, res, next) => { // I'm still working on this too ~ mona
  try {
    const orderId = req.params.orderId;
    const { productId, quantity } = req.body; // get back productId, and quantity 

    // I WANT TO KNOW IF THIS ORDERITEM EXISTS ALREADY
    // YES, UPDATE, NO CREATE
    const orderItemInfo = await OrderItem.findOrCreate({ 
      where: {productId, orderId },
      defaults: {productId, quantity, orderId}
    });
    console.log(orderItemInfo[0])

    if (quantity !== orderItemInfo[0].quantity){ 
      orderItemInfo[0].quantity = quantity;
      await orderItemInfo[0].save();
    }

    const updatedOrder = await Order.findByPk(orderId, {
      include: [{ model: Product }]
    });

    res.json(updatedOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = orderRouter;
