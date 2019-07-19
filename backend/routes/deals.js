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
  // knex
  // .select("*")
  // .from("deals")
  // .orderBy('id', 'desc')
  // .then((data) => {
  //   res.json(data);
  // });

  const data = {
    id: 1,
    name: 'test',
    price: 10.00
  };

  res.json(data);
});

// [POST] deals
router.post('/', function(req, res) {

});

module.exports = router;

//************************************** ROUTES ***************************************/
//*************************************************************************************/

function manipulateDeals() {
  return 'hello world'; 
}