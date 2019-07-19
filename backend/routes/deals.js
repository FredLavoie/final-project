//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();

//************************************** ROUTES ***************************************/
//*************************************************************************************/

// [GET] deals
router.get('/', function(req, res) {
  knex
    .select("*")
    .from("deals")
    .then((data) => {
      res.json(data);
    });

});

// [POST] deals
router.post('/', function(req, res) {

});

module.exports = router;

//************************************** ROUTES ***************************************/
//*************************************************************************************/

// function manipulateDeals() {
//   return 'hello world'; 
// }