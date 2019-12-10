const database = require("./initsequelize")
const Sequelize = require("sequelize")
const Questions = require("./questionModel")

class Choices extends Sequelize.Model{}
Choices.init({
    description: Sequelize.STRING,
    image: Sequelize.STRING,
    votecnt: Sequelize.INTEGER,
},{sequelize:database});



module.exports = Choices