const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  // "postgres://postgres:admin@example.com:5432/postgres"
  "postgres://kbrbfdep:cJXrv06jo9RbWxW2Iio-zERfPZMMW5Kx@tyke.db.elephantsql.com/kbrbfdep"
);
module.exports = sequelize;
