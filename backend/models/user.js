"use strict";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    createdAt: {
      type: DataTypes.DATE,
      field: "createdAt",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updatedAt",
    },
  });

  return user;
};
