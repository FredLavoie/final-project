const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();
const jwt             = require('jsonwebtoken');
const auth            = require('../auth/auth');





router.post('/new', function(req, res) {
const {firstName, lastName, email, password, confirm_password  } = req.body;

if(firstName && lastName && email && password && confirm_password && password === confirm_password ){
  knex
  .insert([{first_name: firstName, last_name: lastName, email: email , password: password, phone_number: null, is_admin: false}])
  .into('users')
  .then(result => {
    console.log(result)
    res.status(200).json({
      message:'user created'
    })
  }).catch((e) => {
    
    console.error('hahah here its is an big err',e)
    res.json({
      message: 'error db insert not good not good'
    })
  })
}else{
  res.status(400).json({
    message:'invalid data please try again'
  })
}
});




module.exports = router;