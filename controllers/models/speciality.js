"use strict";
const Sequelize = require("sequelize");

module.exports = sequelize => {
  const specialities = sequelize.define(
    "specialities",
    {
      specialitySubject: Sequelize.STRING
    },
    {
      schema: "public"
    }
  );
  specialities.associate = function() {
    // associations can be defined here
  };
  return specialities;
};
