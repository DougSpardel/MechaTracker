const express = require('express');


const router = express.Router();

router.get('/', async (req, res) => {
    res.render('homepage', {
      title:'Home Page',
      nav1:'/issues',
      tNav1:'Issue' ,
      nav2:'/maintenance',
      tNav2:'Notes'
    })    

});

router.get('/issues', async (req,res) => {
  res.render('issues', {
    title: 'Issue',
    nav1:'/',
    tNav1:'Home' ,
    nav2:'/maintenance',
    tNav2:'Notes'
  })
})

router.get('/maintenance', (req,res) => {
  res.render('maintenance',{
    title:'Notes',
    nav1:'/',
    tNav1:'Home' ,
    nav2:'/issues',
    tNav2:'Issue'
  })
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login',{
      title:'Login'
    });
  });
  
module.exports = router