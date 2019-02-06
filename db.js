const Sequelize = require('sequelize')

module.exports = new Sequelize('demo_schema', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
})
