const express = require('express');


const router = express.Router();

router.get('/', async (req, res) => {
    res.render('homepage', {
      title:'Home Page',
      nav1:'/issues',
      tNav1:'Issue' ,

    })    

});

router.get('/issues', async (req,res) => {
  res.render('issues', {
    title: 'Issue',
    nav1:'/',
    tNav1:'Home' ,

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