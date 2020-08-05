/**************************
 *** Require Modules *****
 **************************/
const db = require("../db");
const User = require("./user");
const Order = require("./order");
const OrderItem = require("./orderItem")
const Review = require("./review");
const Product = require("./product");

/**************************
 ***** ASSOCIATIONS *******
 **************************/
User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: "OrderItem" });
Product.belongsToMany(Order, { through: "OrderItem" });

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
  db,
  User,
  Product,
  Review,
  Order,
  OrderItem
};
