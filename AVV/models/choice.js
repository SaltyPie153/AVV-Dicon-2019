'use strict';
module.exports = (sequelize, DataTypes) => {
  const Choice = sequelize.define('Choice', {
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    votecnt: DataTypes.INTEGER
  }, {});
  Choice.associate = function(models) {
    Choice.belongsTo(models.Question)
    // associations can be defined here
  };
  return Choice;
};