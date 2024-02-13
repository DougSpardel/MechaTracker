

// routes
const router = require('express').Router();
const issuesRoutes = require('./issuesRoutes');
const vehicleRoutes = require('./vehicleRoutes');
const userRoutes = require('./userRoutes')

router.use('/issues',issuesRoutes);
router.use('/vehicle',vehicleRoutes);
router.use('/user',userRoutes);

module.exports = router


