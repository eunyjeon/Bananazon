const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6D09dkYwqpKaGOF0-kA2ytnLGQW7Iaotl9A&usqp=CAU",
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      isInt: true,
    },
    //not completly confident this setter will work
<<<<<<< HEAD
    // set: function () {
    //   return new Intl.NumberFormat('en-US', {
    //     syle: 'currency',
    //     currency: 'USD',
    //   });
    // },
=======
    set: function () {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    },
>>>>>>> 80df53e66235bd88209926a059758457f7263e15
  },
  description: {
    type: Sequelize.TEXT,
  },
  quantities: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
});

module.exports = Product;

/**
 * instanceMethods
 //remember to creat a calculator/convertor for the price since we made the type integer
 */

/**
 * classMethods
 */
