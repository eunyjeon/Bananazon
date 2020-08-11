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
    // get() {
    //   const rawValue = this.getDataValue('subtotal');
    //   return rawValue && (rawValue / 100).toFixed(2);
    // },
  },
});

// OrderItem.prototype.setSubTotal = function () {
//   const itemPrice = Product.findById(this.productId).price
//   this.subtotal = itemPrice * this.quantity
// }

OrderItem.beforeSave(() => {
  const quantity = this.quantity;
  const productPrice = Product.findByPk(this.productId).price;
  this.subtotal = quantity * productPrice;
})

module.exports = OrderItem;
