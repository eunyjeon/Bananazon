const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6D09dkYwqpKaGOF0-kA2ytnLGQW7Iaotl9A&usqp=CAU',
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      isInt: true,
    },
    get() {
      const rawValue = this.getDataValue('price');
      return rawValue ? rawValue / 100 : null;
    },
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
