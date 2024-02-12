const express = require('express');
const router = express.Router();
const {Issues, Vehicle} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const issuesData = await Issues.findAll(
   
      
    );
    const issues = issuesData.map((issue)=>{
      return issue.get({plain: true})
    })
    const vehicleData = await Vehicle.findAll(
   
      
      );
      const vehicles = vehicleData.map((vehicle)=>{
        return vehicle.get({plain: true})
      })
    
        res.render('homepage', {
      title:'Maintenance Tracker',
      nav1:'/issues',
      tNav1:'Issue' ,
      issues,
      vehicles,
      logged_in: req.session.logged_in
  });
} catch (error) {
    res.status(500).json({ message: error.message });
}

    })    



router.get('/issues', withAuth, async (req,res) => {
  try {
    const vehicleData = await Vehicle.findAll(
   
      
    );
    const vehicles = vehicleData.map((vehicle)=>{
      return vehicle.get({plain: true})
    })
  
  res.render('issues', {
    title: 'Input Issue',
    nav1:'/',
    tNav1:'Home' ,
    vehicles,
    logged_in: req.session.logged_in

  })
}catch (error) {
    res.status(500).json({ message: error.message });
}

    })    





router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login',{
      title:'Login'
    });
  });
  
module.exports = router