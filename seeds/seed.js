const sequelize = require('../config/connect');
const { Issues, Vehicle } = require('../models');

const vehicleData = require('./vehicleData.json');
const issuesData = require('./issuesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const vehicle = await Vehicle.bulkCreate(vehicleData, {
    individualHooks: true,
    returning: true,
  });
  await sequelize.sync({ force: true });

  const issues = await Issues.bulkCreate(issuesData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();