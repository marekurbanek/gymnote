const Sequelize = require('sequelize')
const db = require('../db')

const Run = db.define('run', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  repetitions: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  weight: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
}, {
  timestamps: false
})

module.exports = Run
