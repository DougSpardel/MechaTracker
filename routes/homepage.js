const express = require('express');


const router = express.Router();

router.get('/', async (req, res) => {
    res.render('homepage', {
      title:'Home Page'
    })    

});

router.get('/issues', async (req,res) => {
  res.render('issues', {
    title: 'Issue'
  })
})

router.get('/maintenance', (req,res) => {
  res.render('maintenance')
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