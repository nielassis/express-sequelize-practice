"use strict";

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("Employee", {
    name: DataTypes.STRING,
    hireDate: DataTypes.DATE,
    position_Id: {
      type: DataTypes.INTEGER,
      field: "position_Id",
    },
  });
  Employee.associate = function (models) {
    Employee.belongsTo(models.Position, { foreignKey: "position_Id" });
  };
};
