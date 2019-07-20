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
      console.log(data);
      res.json(data);
    });

});

// [POST] a new deal
router.post('/', function(req, res) {
	
  let dealObject = {};
  dealObject.merchant_id = req.body.merchant_id;
  dealObject.name = req.body.name;
  dealObject.description = req.body.description;
  dealObject.quantity_available = req.body.quantity_available;
  dealObject.image_path = req.body.image_path;
  dealObject.current_price = req.body.current_price;
  
  knex
    .insert(dealObject)
    .into('deals')
    .then( function() {
      res.redirect('/');
    });
	

});

module.exports = router;

//************************************** ROUTES ***************************************/
//*************************************************************************************/

// function manipulateDeals() {
//   return 'hello world'; 
// }