'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    type: DataTypes.STRING
  }, {});
  Question.associate = function(models) {
    Question.hasMany(models.Choice)
    Question.belongsTo(models.Feed)
    // associations can be defined here
  };
  return Question;
};