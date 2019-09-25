"use strict";
const Sequelize = require("sequelize");
const speciality = require("./speciality");

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
    doctors.hasMany(speciality);
  };
  return doctors;
};
