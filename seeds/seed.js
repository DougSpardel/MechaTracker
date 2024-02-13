const sequelize = require('../config/connect');
const { Issues, Vehicle, User } = require('../models');

const vehicleData = require('./vehicleData.json');
const issuesData = require('./issuesData.json');
const userData = require('./userData.json')

//JSON format in the models

//seed creates
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Vehicle.bulkCreate(vehicleData, {
    individualHooks: true,
    returning: true,
  });

  await Issues.bulkCreate(issuesData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();