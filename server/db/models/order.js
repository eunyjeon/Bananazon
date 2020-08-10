const db = require("../db");
const Sequelize = require("sequelize");
const OrderItem = require("./orderItem");

const Order = db.define("order", {
  isPaid: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
    get() {
      const rawValue = this.getDataValue("totalPrice");
      return rawValue && rawValue / 100;
    },
  },
});

// Order.prototype.setTotalPrice = function () {}

module.exports = Order;
