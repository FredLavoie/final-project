//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();

//************************************** ROUTES ***************************************/
//*************************************************************************************/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;



// /merchants/:id/deals

// /merchants/:id/deals

