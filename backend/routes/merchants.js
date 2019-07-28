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

// [GET] all merchant information for map points
router.get('/', function(req, res) { 
  knex
    .select("*")
    .from("merchants")
    .then((data) => {
      res.json(data);
    });
});


// [GET] merchant information
router.get('/current_merchant', auth, function(req, res) { 
  knex
    .select("*")
    .from("deals")
    .where("merchants_id", req.merchant_id)
    .then((data) => {
      res.json(data);
    });
});

// [GET] merchant information
router.get('/:id/dashboard', auth, function(req, res) {  
  // if(req.params.id !== req.merchant_id) {
  //   // sometihing
  // }

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

  
  knex
    .select("*")
    .from("merchants")
    .where("merchants.email", email)
    .then(([ merchant ]) => {
      if(merchant.password === password) {        
        jwt.sign(
          { merchant_id: merchant.id },
          process.env.JWT_SECRET,
          {expiresIn: 60*60*24}, (err, token) => {
            if (err) {
              console.log(err);
            } else {
              res.status(200).json({token: token, merchant_id: merchant.id, business_name: merchant.business_name });
            }
          });
      }
    })
    .catch((exeption) => {
      console.error('Merchant does not exist.', exeption);
      res.status(400).json({message: 'Invalid input'});
    });
});

// [REGISTER]
router.post('/register', function(req, res) {
  console.log('REQ BODY', req.body)
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
  // newUserObj.latitude = req.body.latitude;
  // newUserObj.longitude = req.body.longitude;


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
            res.status(201).json({ token: token, merchant_id: merchant_id, business_name: business_name });
          }
        });
    });
  
});



module.exports = router;


//     knex
//     .insert([{first_name: firstName, last_name: lastName, email: email , password: password, phone_number: null, is_admin: false}])
//     .into('users')
//     .then(result => {
//       console.log(result);
//       res.status(200).json({
//         message:'User created.',
//         good: true
//       });
//     }).catch((e) => {
//       console.error('Error',e);
//       res.json({
//         message: 'Email already exist.'
//       });
//     });
//   }else{
//     res.status(400).json({message:'Password should match.'})
//   }
// }else{
//   res.status(400).json({
//     message:'Invalid input in field(s).'
//   });
// }
// });