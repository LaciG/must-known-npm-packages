'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING(200)
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(200) 
    }
  }, {
    tableName: 'user',
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};