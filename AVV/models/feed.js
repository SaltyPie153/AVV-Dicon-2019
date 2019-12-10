'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define('Feed', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Feed.associate = function(models) {
    Feed.hasOne(models.Question)
    Feed.belongsTo(models.Thread)
    // associations can be defined here
  };
  return Feed;
};