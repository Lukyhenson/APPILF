//require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

//export our router
module.exports = router;

// route for homepage
router.get('/', function(req, res){
  res.render('pages/index');
});

// route for login
router.get('/login', function(req, res){
  res.render('pages/login');
});

// rout for our about page
router.get('/about', function(req, res){
  res.render('pages/about');
});

// route for Download
router.get('/download', function(req, res){
  res.render('pages/download');
});

// route for register
router.get('/register', function(req, res){
  res.render('pages/register');
});

// route for profile
router.get('/profile', function(req, res){
  res.render('pages/profile');
});

// route for settings
router.get('/settings', function(req, res){
  res.render('pages/settings');
});

// route for serach-page
router.get('/serach-page', function(req, res){
  res.render('pages/serach-page');
});

// route for create-post
router.get('/create-post', function(req, res){
  res.render('pages/create-post');
});