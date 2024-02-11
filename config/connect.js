

// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;
// // Create a new Sequelize instance using environment variables from your .env file
// if(process.env.JAWSDB_URL){
//   Sequelize = new Sequelize(process.env.JAWSDB_URL);
// }else{
// const Sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql', // or another database dialect
//     dialectOptions: {
//         decimalNumbers: true, // other dialect-specific options can be added here
//     }
// });
// }

// // Export the sequelize instance
// module.exports = sequelize;



// // //  Import the necessary modules
// const Sequelize = require('sequelize');
// require('dotenv').config(); // This will load the environment variables from the .env file

// let sequelize;

// // Check if the JAWSDB_URL is available; otherwise, fall back to individual credentials
//  new Sequelize(process.env.JAWSDB_URL)
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: process.env.DB_HOST,
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

//  // Export the sequelize instance for use in other files
// module.exports = sequelize;

const {Sequelize} = require('sequelize');
require('dotenv').config();

let sequelize;

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
