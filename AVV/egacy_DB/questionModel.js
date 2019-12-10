const database = require("./initsequelize")
const Sequelize = require("sequelize")

class Questions extends Sequelize.Model{}
Questions.init({
    type: Sequelize.STRING
},{sequelize:database});


module.exports = Questions