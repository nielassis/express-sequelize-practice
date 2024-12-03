"use strict";

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("Employee", {
    name: DataTypes.STRING,
    hireDate: { type: DataTypes.DATE, field: "hire_date" },
    createdAt: {
      type: DataTypes.DATE,
      field: "createdAt",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updatedAt",
    },
    position_Id: {
      type: DataTypes.INTEGER,
      field: "position_Id",
    },
  });
  Employee.associate = function (models) {
    Employee.belongsTo(models.Position, { foreignKey: "position_Id" });
  };
  return Employee;
};
