const routes = require("express").Router();

const sequelize = require("./db");
const doctor = require("./controllers/modules/Doctor")(sequelize);
const speciality = require("./controllers/modules/Speciality")(sequelize);

routes.post("/addDoctor", doctor.create);
routes.post("/addSpeciality", speciality.create);

module.exports = routes;
