const express = require("express");
const app = express();
const port = 4000;
const userController = require("./controllers/users.controller");
const jwtController = require("./controllers/jwt.controller");
const cors = require("cors");
// Adding cors to avoid cross domain blocking
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));

//Routes

app.get("/users", userController.findAllUsers);

// forgot to document this one.
app.put("/validateUser", userController.validateUser);

app.post("/generateToken", jwtController.generateToken);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
