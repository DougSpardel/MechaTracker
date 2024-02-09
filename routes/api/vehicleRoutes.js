const express = require('express');
const {Vehicle, Issues} = require('../../models'); // Update the path to where your Vehicle model is located
const router = express.Router();

// GET all vehicles
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll({
            include: [{model: Issues}]
        });
        res.json(vehicles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET a single vehicle by vehicle_number
router.get('/:vehicle_number', async (req, res) => {
    try {
        const vehicle = await Vehicle.findByPk(req.params.vehicle_number, {
            include: [{model: Issues}]
        });
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
router.put('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.update(req.body, {
            where: { id: req.params.id }
        });
        if (!vehicle) {
            return res.status(404).json({ message: "No such vehicle"}), undefined;
        }
        res.status(200).json(vehicle);
    } catch (err) {
        console.log("Error in updating vehicle", err);
        res.status(500).json({message:"Internal server error"})
    }
});

router.delete("/:id", async (req,res)=>{
    try{
        const deleted=await Vehicle.destroy(
            {where:{id:req.params.id}
        });
        if(!deleted){
            return res.status(404).json({message:'No such vehicle exists!'})
        }
        res.status(204).send();
    }catch(e){
        res.status(400).json({message:e.message})
    }
});

module.exports = router;