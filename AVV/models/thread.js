'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    profileimg: DataTypes.STRING
  }, {});
  Thread.associate = function(models) {
    Thread.belongsTo(models.User, {as: 'author'})
    Thread.hasMany(models.Feed)
    // associations can be defined here
  };
  return Thread;
};