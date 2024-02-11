const express = require('express');
const router = express.Router();
const {Issues} = require('../models');


router.get('/', async (req, res) => {
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
      loggedIn: req.session.loggedIn
  });
} catch (error) {
    res.status(500).json({ message: error.message });
}

    })    



router.get('/issues', async (req,res) => {
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
    issues

  })
}catch (error) {
    res.status(500).json({ message: error.message });
}

    })    





router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('login',{
      title:'Login'
    });
  });
  
module.exports = router