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
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    username: {
      alluwNull: false,
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
    instanceMethods: {
      generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
      validPassword(password) {
          return bcrypt.compare(password, this.password);
      }
  }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};