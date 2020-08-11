const db = require('../db');
const Product = require('./product');
const Sequelize = require('sequelize');

const OrderItem = db.define('orderItem', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
    },
  },
  subtotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
    get() {
      const rawValue = this.getDataValue('subtotal');
      return rawValue && (rawValue / 100).toFixed(2);
    },
  },
});

// OrderItem.prototype.setSubTotal = function () {
//   const itemPrice = Product.findById(this.productId).price
//   this.subtotal = itemPrice * this.quantity
// }

OrderItem.beforeSave(async (orderItemInstance) => {
  const quantity = orderItemInstance.quantity;
  const productId = orderItemInstance.productId;
  console.log('what is thisssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', quantity)
  console.log('what is thisssssssssssssssssssssssssssssssssssssssssssssssssssssssssss productId', productId)
  const product = await Product.findByPk(productId);
  // console.log('what is thisssssssssssssssssssssssssssssssssssssssssssssssssssssssssss PRODUCT PRICE', productPrice.price)
  orderItemInstance.subtotal = quantity * product.price * 100;
  console.log(orderItemInstance.subtotal * 100)
})

module.exports = OrderItem;
