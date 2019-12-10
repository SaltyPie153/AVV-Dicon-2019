const database = require("./initsequelize")
const Sequelize = require("sequelize")

class Users extends Sequelize.Model{}
Users.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    gender: Sequelize.STRING,
    type: Sequelize.STRING
},{sequelize:database});


module.exports = Users