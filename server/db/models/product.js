const Sequelize = require('sequelize')
const db = require('../db');

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    category: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6D09dkYwqpKaGOF0-kA2ytnLGQW7Iaotl9A&usqp=CAU'
    },
    price: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0
        }
    },
    description: {
        type: Sequelize.TEXT,
    },
    quantities: {
        type: Sequelize.INTEGER,
        validate: {
            min: 0
        }
    }
    
})

module.exports = Product;

/**
 * instanceMethods
 */


/**
 * classMethods
 */
