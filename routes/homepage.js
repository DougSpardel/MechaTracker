const express = require('express');


const router = express.Router();

router.get('/', async (req, res) => {
    res.render('homepage')    

});

router.get('/issues', async (req,res) => {
  res.render('issues')
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
module.exports = router