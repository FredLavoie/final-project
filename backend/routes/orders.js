//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const uuid 			    	= require('uuid/v4');
const router 					= express.Router();
const Auth 					  = require('../auth/auth');

//************************************** ROUTES ***************************************/
//*************************************************************************************/


router.post('/create', function(req, res) {
  let orderObj = {};
  const { cart, userId, total, order_number} = req.body;
  orderObj.user_id = userId;
  orderObj.total = total;
  orderObj.order_number = uuid().substring(0,7);
  
  knex
    .insert(orderObj)
    .into('orders')
    .returning('orders.id')
    .then(function(data) {
      for(let item of cart) {
        middleTableEntry(item, data[0]);
      }
    }).then(function() {
      for(let item of cart) {
        updateQuantity(item);
      }
    });
	
  
  function updateQuantity(item) {
    let newQuant = item.quantity_available - item.cart_quantity;
    let quantObj = {quantity_available: newQuant};
		
    knex
      .select('*')
      .from('deals')
      .where({id: item.deal_id})
      .update(quantObj)
      .then()
      .error(err => console.log(err));
  }

  function middleTableEntry(item, data) {		
    let entryObj = {};
    entryObj.deal_id = item.deal_id;
    entryObj.order_id = data;
    entryObj.deal_price_purchased = item.current_price;
    entryObj.total_price_purchased = (item.current_price * item.cart_quantity).toFixed(2);
    entryObj.quantity_purchased = item.cart_quantity;

    knex
      .insert(entryObj)
      .into('orders_deals')
      .then();
  }

});

//[GET] user deals
router.get('/:id/view', function(req, res) {
  knex
    .select("*")
    .from("orders") 
    .where("orders.user_id", req.params.id)
    .then((data) => {
      res.json(data);
    });
});



router.get('/user/:id', Auth, function(req, res) {

  knex
  .select('orders.id as order_id', 
  'orders.user_id as user_id', 
  'orders.order_number as order_number', 
  'orders.total as total',
  'orders_deals.deal_id as deal_id',
  'orders.created_at as created_at',
  'orders_deals.quantity_purchased as quantity',
  'orders_deals.deal_price_purchased as deal_price',
  'deals.merchant_id as merchant_id',
  'merchants.business_name as merchant_name',
  'deals.name as product_name',
  'deals.image_path as image' )
  .from('orders')
  .innerJoin('orders_deals', 'orders.id', 'order_id')
  .innerJoin('deals', 'orders_deals.deal_id', 'deals.id')
  .innerJoin('merchants', 'merchants.id', 'deals.merchant_id')
  .where('user_id', req.params.id)
  .then( result => res.json(result))
  .catch(error => res.json({message: error}))

})
  

module.exports = router;