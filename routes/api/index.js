// routes
const router = require('express').Router();

//require individual routes
const issuesRoutes = require('./issuesRoutes');
const vehicleRoutes = require('./vehicleRoutes');
const userRoutes = require('./userRoutes')

//https routes
router.use('/issues',issuesRoutes);
router.use('/vehicle',vehicleRoutes);
router.use('/user',userRoutes);

module.exports = router


