const User = require("../model/userModel");
const { QueryTypes } = require("sequelize");
const sequelize = require("../config");
const mail = require("../mailer/googleSmtpMailer");

exports.findAllUsers = async (req, res) => {
  // Using raw queries due to sequelize findAll() table relationship error
  await sequelize
    .query("SELECT * FROM postgres", {
      type: QueryTypes.SELECT,
    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};
exports.validateUser = async (req, res) => {
  // Validating user in database using user_id
  await User.update(
    { validated: true, validation_date: Date.now() },
    {
      where: { user_id: req.body.user_id },
    }
  );
  // Using google smtp mail transporter to send the validation email
  await mail.transporter
    .sendMail({
      from: "Admin", // sender address
      to: req.body.email, // could be a list too
      subject: "Email Validation", // Subject line
      html: "Bonjour,<br>Votre compte est validé.<br>Cordialement.",
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.send(error);
    });
};
