const User = require("../controllers/users.controller");
const express = require("express");
const router = express.Router();
const cors = require("cors");
// Adding cors to avoid cross domain blocking
var corsOptions = {
  origin: "http://127.0.0.1:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
router.get("/users", cors(corsOptions), User.findAllUsers);
router.put("/validateUser", cors(corsOptions), User.validateUser);
module.exports = router;
