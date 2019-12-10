const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
    'avv',
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        storage: 'dicondb.sqlite'
    }
)

module.exports = sequelize