const sequelize = require('../config/connect');
const { Issues, Vehicle } = require('../models');

const vehicleData = require('./vehicleData.json');
const issuesData = require('./issuesData.json');

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