const express = require('express');
const Vehicle = require('../../models/vehicle'); // Update the path to where your Vehicle model is located
const router = express.Router();

// GET all vehicles
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET a single vehicle by vehicle_number
router.get('/:vehicle_number', async (req, res) => {
    try {
        const vehicle = await Vehicle.findByPk(req.params.vehicle_number);
        if (vehicle) {
            res.status(200).json(vehicle);
        } else {
            res.status(404).json({ message: 'Vehicle not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new vehicle
router.post('/', async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// You might want PUT and DELETE routes for Vehicle as well, similar to the Issues routes.

module.exports = router;