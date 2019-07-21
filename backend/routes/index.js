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
  console.log(`Authenticated user: ${req.user.email}\n password: ${req.user.password}`);
  res.json(req.user);
});

// [LOGOUT] get logOUT page
router.get('/logout', function(req, res) {
  req.session.destroy(function (err) {
    res.clearCookie('connect.sid');

    res.json({ authorize: false, user: {} });
  });
});

// [REGISTER] post login page
router.post('/register', function(req, res) {

  res.render('index', { title: 'Express' });
});


module.exports = router;
