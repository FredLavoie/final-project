//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();

//************************************** ROUTES ***************************************/
//*************************************************************************************/

// [GET] merchant deals
router.get('/:merchant_id', function(req, res) {
  knex
    .select("*")
    .from("deals")
    .where("deals.merchant_id", req.params.merchant_id)
    .then((data) => {
      res.json(data);
    });

});



module.exports = router;



// /merchants/:id/deals

// /merchants/:id/deals

