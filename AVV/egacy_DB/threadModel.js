const database = require("./initsequelize")
const Sequelize = require("sequelize")

class Thread extends Sequelize.Model{}
Thread.init({
    title: Sequelize.STRING,
    category: Sequelize.STRING,
    profileimg: Sequelize.STRING,
},{sequelize:database});

module.exports = Thread