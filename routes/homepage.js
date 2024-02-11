const express = require('express');
const router = express.Router();
const {Issues} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const issuesData = await Issues.findAll(
   
      
    );
    const issues = issuesData.map((issue)=>{
      return issue.get({plain: true})
    })
        res.render('homepage', {
      title:'Home Page',
      nav1:'/issues',
      tNav1:'Issue' ,
      issues,
      logged_in: req.session.logged_in
  });
} catch (error) {
    res.status(500).json({ message: error.message });
}

    })    



router.get('/issues', withAuth, async (req,res) => {
  try {
    const issuesData = await Issues.findAll(
   
      
    );
    const issues = issuesData.map((issue)=>{
      return issue.get({plain: true})
    })
  
  res.render('issues', {
    title: 'Issue',
    nav1:'/',
    tNav1:'Home' ,
    issues,
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