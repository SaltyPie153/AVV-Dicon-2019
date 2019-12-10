const Questions = require("./questionModel")
const Users = require("./userModel")
const Choices = require("./choiceModel")
const Feeds = require("./feedModel")
const Threads = require("./threadModel")

Questions.belongsTo(Feeds)
Feeds.hasOne(Questions)

Choices.belongsTo(Questions)
Questions.hasMany(Choices)

Threads.hasOne(Users, {as: 'author'})
Users.hasMany(Threads)

Feeds.belongsTo(Threads)
Threads.hasMany(Feeds)

console.log("db setted")

const refresh = false;
Users.sync({force:refresh});
Threads.sync({force:refresh});
Feeds.sync({force:refresh});
Questions.sync({force:refresh});
Choices.sync({force:refresh});