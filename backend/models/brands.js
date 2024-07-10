const { DB_CONN } = process.env;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(DB_CONN);

const User = sequelize.define(
  'Brand',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

module.exports = Brand