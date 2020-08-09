const db = require('../db');
const Sequelize = require('sequelize');
const OrderItem = require('./orderItem');

const Order = db.define('order', {
  isPaid: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      inEmpty: false,
    },
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue('totalPrice');
      return rawValue ? rawValue / 100 : null;
    },
  },
});

// Order.prototype.setTotalPrice = function () {}

module.exports = Order;
