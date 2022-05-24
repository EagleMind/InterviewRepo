const nodemailer = require("nodemailer");
// Smtp service config
exports.transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "testingsmtpforinterview@gmail.com",
    pass: "123@456@789",
  },
});
