//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY; 
const stripe = require('stripe')(STRIPE_SECRET_KEY);
const app = express();

app.use(require("body-parser").text())


//************************************** ROUTES ***************************************/
//*************************************************************************************/


// Make payment with stripe (Step 1)
router.post('/save-stripe-token', async function(req, res) {
  console.log('req.body.id', req.body.id); 
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "cad",
      description: "An example charge",
      source: req.body.id
    });

    res.json({status});
  } catch (err) {
    console.log(err)
    res.status(500).end();
  }
  });

//configureRoutes(); 


//Step 2
// const configureRoutes = app => {
//   paymentApi(app);
// };


//Step 3
// const paymentApi = () => {
//     app.get('/', (req, res) => { //app is not defined 
//       res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
//     });
  
//     app.post('/', (req, res) => {
//       console.log('Do I go through app.post?')
//       stripe.charges.create(req.body, postStripeCharge(res));
//     });
  
//     return app;
// };

//Step 4
// const postStripeCharge = res => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// }

  

  module.exports = router;