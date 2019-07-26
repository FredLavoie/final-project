//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();

//************************************** ROUTES ***************************************/
//*************************************************************************************/


router.post('/create', function(req, res) {
  console.log('This is the cart stuff inside backend: ', req.body);
  let orderObj = {};
  const { cart, userId, total } = req.body;

  orderObj.user_id = userId;
  orderObj.total = total;
	
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
    console.log('Inside updateQuantity function');
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
    console.log('Inside middleTableEntry function');		
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

module.exports = router;

