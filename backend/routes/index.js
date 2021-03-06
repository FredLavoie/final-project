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



module.exports = router;
