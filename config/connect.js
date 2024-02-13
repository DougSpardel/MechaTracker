// requires for sequelize and dotenv
const Sequelize = require('sequelize');
require('dotenv').config();

// sequelize variable
let sequelize;

// JAWSDB_URL is for Heroku integration
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
