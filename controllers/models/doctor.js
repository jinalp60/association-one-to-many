"use strict";
const Sequelize = require("sequelize");

module.exports = sequelize => {
  const doctors = sequelize.define(
    "doctors",
    {
      firstName: Sequelize.STRING,
      doctorId: Sequelize.STRING
    },
    {
      schema: "public"
    }
  );
  doctors.associate = () => {
    // associations can be defined here
  };
  return doctors;
};
