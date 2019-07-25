//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();
const configureStripe = require('stripe');
const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_MY_SECRET_KEY';
const stripe = configureStripe(STRIPE_SECRET_KEY);

//************************************** ROUTES ***************************************/
//*************************************************************************************/


const postStripeCharge = res => (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
}

const paymentApi = app => {
    app.get('/', (req, res) => {
      res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
    });
  
    app.post('/', (req, res) => {
      stripe.charges.create(req.body, postStripeCharge(res));
    });
  
    return app;
  };

  const configureRoutes = app => {
    paymentApi(app);
  };
  

// Make payment with stripe
router.post('/save-stripe-token', function(req, res) {
    console.log('The front end is connecting with backend :)', res)
  
  configureRoutes(); 
  });

  module.exports = router;