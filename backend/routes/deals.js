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
  let currentTime = new Date();
  
  knex
    .select("*")
    .from("deals")
    .where("quantity_available", ">", 0)
    .where("end_date", ">", currentTime)
    .orderBy("end_date")
    .then((data) => {
      res.json(data);
    });

});

// [GET] specific deal
router.get('/:id', function(req, res) {
  knex
    .select("*")
    .from("deals")
    .where("deals.id", req.params.id)
    .then((data) => {
      res.json(data);
    });

});

// [CREATE] a new deal
router.post('/new', function(req, res) {
  let dateArr = (req.body.date).split('-');
  let timeArr = (req.body.time).split(':');
  let year= Number(dateArr[0]);
  let month= Number(dateArr[1])-1;
  let day= Number(dateArr[2]);
  let hour= Number(timeArr[0]);
  let min= Number(timeArr[1]);
  
  let dealObject = {};
  dealObject.merchant_id = req.body.merchant_id;
  dealObject.name = req.body.name;
  dealObject.description = req.body.description;
  dealObject.quantity_available = req.body.quantity_available;
  dealObject.image_path = req.body.image_path;
  dealObject.current_price = req.body.current_price;
  dealObject.end_date = new Date(year,month,day,hour,min);

  knex
    .insert(dealObject)
    .into('deals')
    .then((data) => {
      res.json(data);
    });

});

// [UPDATE] a deal
router.post('/:deal_id/update', function(req, res) {
  let dealToUpdate = req.body[0];
  let dealObject = {};

  dealObject.merchant_id = dealToUpdate.merchant_id;
  dealObject.name = dealToUpdate.name;
  dealObject.description = dealToUpdate.description;
  dealObject.quantity_available = dealToUpdate.quantity_available;
  dealObject.image_path = dealToUpdate.image_path;
  dealObject.current_price = dealToUpdate.current_price;
  
  knex
    .select('*')
    .from('deals')
    .where({id: req.params.deal_id})
    .update(dealObject)
    .then( function() {
      res.redirect('/');
    });

});

// [DELETE] a deal
router.post('/:deal_id/delete', function(req, res) {
  
  knex
    .select('*')
    .from('deals')
    .where({id: req.params.deal_id})
    .del()
    .then( function() {
      res.redirect('/');
    });

});

module.exports = router;


//************************************** ROUTES ***************************************/
//*************************************************************************************/

function dateToMilliseconds(date) {
  let year = date; 
  let month = date;
  let day = date;

  return 
}

