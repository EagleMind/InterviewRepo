const Jwt = require("../controllers/jwt.controller");
const express = require("express");
const router = express.Router();
const cors = require("cors");
// Adding cors to avoid cross domain blocking
var corsOptions = {
  origin: "http://127.0.0.1:3000",
  optionsSuccessStatus: 200,
};
router.post("/generateToken", cors(corsOptions), Jwt.generateToken);
module.exports = router;
