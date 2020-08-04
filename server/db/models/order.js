const db = require("../db");
const Sequelize = require("sequelize");

const Order = db.define("order", {
  isPaid: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      inEmpty: false,
    },
  },
});

module.exports = Order;
