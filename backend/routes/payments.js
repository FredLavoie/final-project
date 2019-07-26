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
const auth            = require('../auth/auth');


app.use(require("body-parser").text())


//************************************** ROUTES ***************************************/
//*************************************************************************************/


// Make payment with stripe (Step 1)
router.post('/save-stripe-token', auth, async function(req, res) {
  console.log('req.body', req.body); 
  try {
    let {status} = await stripe.charges.create({
      amount: req.body.amount,
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

module.exports = router;