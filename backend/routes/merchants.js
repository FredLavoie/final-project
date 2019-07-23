//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();
const jwt             = require('jsonwebtoken');
const auth            = require('../auth/auth');

//************************************** ROUTES ***************************************/
//*************************************************************************************/

// [GET] merchant information
router.get('/current_merchant', auth, function(req, res) { 
  knex
    .select("*")
    .from("merchants")
    .where("merchants.id", req.merchant_id)
    .then((data) => {
      res.json(data);
    });
});

// [GET] merchant information
router.get('/:id/dashboard', auth, function(req, res) {
  console.log(req.params.id);
  console.log(req.merchant_id);
  
  if(req.params.id !== req.merchant_id) {
    // sometihing
  }

  knex
    .select("*")
    .from("deals")
    .where("merchant_id", req.params.id)
    .then((data) => {
      res.json(data);
    });
});

// [GET] merchant deals
router.get('/deals', auth, function(req, res) {
  knex
    .select("*")
    .from("deals")
    .where("deals.merchant_id", req.merchant_id)
    .then((data) => {
      res.json(data);
    });
});

// [LOGIN] get login page
router.post('/login', function(req, res) {
  const { email, password } = req.body;
  console.log('This is the body: ',req.body);
  
  knex
    .select("*")
    .from("merchants")
    .where("merchants.email", email)
    .then(([ merchant ]) => {
      console.log('Merchant post knex: ', merchant);
      if(merchant.password === password) {
        console.log('before signing token. Passwords match');
        
        jwt.sign(
          { merchant_id: merchant.id },
          process.env.JWT_SECRET,
          { expiresIn: 60*60*24 }, (err, token) => {
            if (err) {
              console.log(err);
            } else {
              res.json({ token: token, merchant_id: merchant.id });
            }
          });
      }
    });
});

// [REGISTER]
router.post('/register', function(req, res) {
  let newUserObj = {};
  newUserObj.business_name = req.body.business_name;
  newUserObj.email = req.body.email;
  newUserObj.password = req.body.password;
  newUserObj.street_address = req.body.street_address;
  newUserObj.city = req.body.city;
  newUserObj.province = req.body.province;
  newUserObj.postal_code = req.body.postal_code;
  newUserObj.phone_number = req.body.phone_number;
  newUserObj.type_of_merchant = req.body.type_of_merchant;
  newUserObj.latitude = req.body.latitude;
  newUserObj.longitude = req.body.longitude;

  knex
    .insert(newUserObj)
    .into('merchants')
    .returning('id')
    .then( function([merchant_id]) {
      jwt.sign(
        { merchant_id: merchant_id },
        process.env.JWT_SECRET,
        { expiresIn: 60*60*24 }, (err, token) => {
          if (err) {
            console.log(err);
          } else {
            res.status(201).json({ token: token, merchant_id: merchant_id });
          }
        });
    });
  
});



module.exports = router;



// /merchants/:id/deals

// /merchants/:id/deals

