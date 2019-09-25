"use strict";
let specialities;
module.exports = function(sequelize) {
  const doctors = require("../../models/doctor")(sequelize);
  specialities = require("../../models/speciality")(sequelize);

  const createHandler = async (req, res, next) => {
    doctors.hasMany(specialities, { foreignKey: "doctorId" });
    specialities.belongsTo(doctors, { foreignKey: "doctorId" });

    let message = "1 row inserted";
    try {
      await specialities.create(req.body);
    } catch (err) {
      console.log(err);
      message = err.message;
    }

    res.status(200).json({ message });
  };
  return createHandler;
};
