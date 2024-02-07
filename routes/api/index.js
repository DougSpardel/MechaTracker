

// routes
const router = require('express').Router();
const issuesRoutes = require('./issuesRoutes');
const vehicleRoutes = require('./vehicleRoutes');

router.use('/issues',issuesRoutes);
router.use('/vehicle',vehicleRoutes);

module.exports = router


