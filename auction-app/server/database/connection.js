const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "ermin",
  password: "ermin",
  database: "auction_app",
});

module.exports = sequelize;
