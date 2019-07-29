const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();
const jwt             = require('jsonwebtoken');
// const auth            = require('../auth/auth');




//USER REGISTER
router.post('/new', function(req, res) {
  const {firstName, lastName, email, password, confirm_password  } = req.body;

  if(firstName && lastName && email && password && confirm_password){
    if(password === confirm_password){
      knex
      .insert([{first_name: firstName, last_name: lastName, email: email , password: password, phone_number: null, is_admin: false}])
      .into('users')
      .then(result => {
        console.log(result);
        res.status(200).json({
          message:'User has been created',
          good: true
        });
      }).catch((e) => {
        console.error('hahah here its is an big err',e);
        res.json({
          message: 'Email exist already.'
        });
      });
    }else{
      res.status(400).json({message:'password should match'})
    }
  }else{
    res.status(400).json({
      message:'Invalid inputs fields.'
    });
  }
});
//USER LOGIN
router.post('/login', function(req, res) {
  const {email, password } = req.body;
  if(email && password ){
    knex
    .select('email', 'password', 'id', 'first_name')
    .into('users')
    .where('email', email)
    .where('password', password)
    .then(([user]) => {
      jwt.sign(
        {user_id: user.id},
        process.env.JWT_SECRET, 
        { expiresIn: 60*60*24 }, (err, token) => {
          if(err) {
            console.log(err);
          }else {
            res.status(200).json({token: token, user_id: user.id, username: user.first_name,good: true});
          }
        }
      );
    })
    .catch((exception) => {
      console.error('User does not exist.', exception);
      res.status(400).json({message: 'Invalid input'});
    });
  }else{
    res.status(400).json({message: 'All fields  are required'})
  }

});

module.exports = router;