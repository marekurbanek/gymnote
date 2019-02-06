const Sequelize = require('sequelize')
const db = require('../db')

const Workout = db.define('workout', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
  },
})

module.exports = Workout