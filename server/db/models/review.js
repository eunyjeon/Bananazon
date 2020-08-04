const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      max: 2000
    }
  },
  rate: {
   type: Sequelize.INTEGER,
   allowNull: false,
   validate: {
     min: 1,
     max: 5
   }
  }
})

module.exports = Review
