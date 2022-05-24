require("dotenv").config();
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

exports.generateToken = async (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  // Sending user_id in data for token generation & verification
  let data = { user_id: req.body.id };

  // Token expires in 1min in milliseconds
  const token = jwt.sign({ data }, jwtSecretKey, { expiresIn: 60000 });
  await User.update(
    { bearer_token: token, validation_date: Date.now() },
    {
      where: { user_id: req.body.user_id },
    }
  );
  res.status(200).send(token);
};
