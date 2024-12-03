"use strict";

module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define("Position", {
    title: DataTypes.STRING,
    salary: DataTypes.FLOAT,
    createdAt: {
      type: DataTypes.DATE,
      field: "createdAt",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updatedAt",
    },
  });

  Position.associate = function (models) {
    Position.hasMany(models.Employee, { foreignKey: "position_Id" });
  };

  return Position;
};
