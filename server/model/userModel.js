const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const User = sequelize.define(
  "postgres",
  {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    validated: DataTypes.BOOLEAN,
    bearer_token: DataTypes.STRING,
    validation_date: DataTypes.DATE,
  },
  {
    timestamps: true,
    updatedAt: "updated_at", // alias updatedAt as updated_at in the DB
  }
);
module.exports = User;
