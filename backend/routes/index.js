//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const passport        = require('passport');
const router 					= express.Router();


//************************************** ROUTES ***************************************/
//*************************************************************************************/

// [HOME] get home page
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// [LOGIN] get login page
router.post('/login', passport.authenticate('local'), function(req, res) {
  // console.log(`Authenticated user: ${req.user.email}\n password: ${req.user.password}`);
  res.json(req.user);
});

// [LOGOUT] get logout page
router.get('/logout', function(req, res) {
  req.session.destroy(function (err) {
    res.clearCookie('connect.sid');
    res.json({ authorize: false, user: {} });
  });
});

// [REGISTER] post login page
router.post('/register', function(req, res) {
  let newUserObj = {};
  newUserObj.business_name = req.body.business_name;
  newUserObj.email = req.body.email;
  newUserObj.password = req.body.password;
  newUserObj.street_address = req.body.street_address;
  newUserObj.city = req.body.city;
  newUserObj.province = req.body.province;
  newUserObj.postal_code = req.body.postal_code;
  newUserObj.phone_number = req.body.phone_number;
  newUserObj.type_of_merchant = req.body.type_of_merchant;
  // newUserObj. = req.body.;

  knex
    .insert(newUserObj)
    .into('merchants')
    .then( function() {
      res.redirect('/');
    });
  
});


module.exports = router;
