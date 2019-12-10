const database = require("./initsequelize")
const Sequelize = require("sequelize")
const user = require("./userModel")

class Feeds extends Sequelize.Model{}
Feeds.init({
    title: Sequelize.STRING,
    content: Sequelize.STRING,
},{sequelize:database});



module.exports = Feeds