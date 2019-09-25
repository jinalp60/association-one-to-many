//const Sequelize = require('sequelize');
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

var bodyParser = require("body-parser");
app.use(
  bodyParser.json({
    parameterLimit: 100000,
    limit: 102410241024,
    extended: true
  })
);
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

//  Connect all our routes to our application
app.use("/", routes);

const server = app.listen(8000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
