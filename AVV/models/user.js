const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Sequelize.Model{}
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    type: DataTypes.STRING
  },{sequelize})
  User.associate = function(models) {
    User.hasMany(models.Thread)//, {as: 'author'})
    // associations can be defined here
  };
  return User;
};