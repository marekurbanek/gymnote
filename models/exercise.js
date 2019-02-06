const Sequelize = require('sequelize')
const db = require('../db')

const Exercise = db.define('exercise', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
})

module.exports = Exercise
