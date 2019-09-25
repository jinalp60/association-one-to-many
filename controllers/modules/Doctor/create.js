"use strict";
let doctors;
module.exports = function(sequelize) {
  doctors = require("../../models/doctor")(sequelize);
  const specialities = require("../../models/speciality")(sequelize);

  const createHandler = async (req, res, next) => {
    doctors.hasMany(specialities, { foreignKey: "doctorId" });
    specialities.belongsTo(doctors, { foreignKey: "doctorId" });

    await doctors.create(req.body);

    res.status(200).json({ message: "1 row inserted" });
  };
  return createHandler;
};
