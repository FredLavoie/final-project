const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();
<<<<<<< HEAD
//const jwt             = require('jsonwebtoken');
=======
const jwt             = require('jsonwebtoken');
>>>>>>> master
// const auth            = require('../auth/auth');




//USER REGISTER
router.post('/new', function(req, res) {
  const {firstName, lastName, email, password, confirm_password  } = req.body;

  if(firstName && lastName && email && password && confirm_password && password === confirm_password ){
    knex
      .insert([{first_name: firstName, last_name: lastName, email: email , password: password, phone_number: null, is_admin: false}])
      .into('users')
      .then(result => {
        console.log(result);
        res.status(200).json({
          message:'user created',
          good: true
        });
      }).catch((e) => {
    
        console.error('hahah here its is an big err',e);
        res.json({
          message: 'Email already exist please login.'
        });
      });
  }else{
    res.status(400).json({
      message:'Invalid input fields.'
    });
  }
});

//USER LOGIN
router.post('/login', function(req, res) {
  const {email, password } = req.body;
  knex
    .select('email', 'password', 'id')
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
            res.status(200).json({token: token, user_id: user.id});
          }
        }
      );
    })
    .catch((exception) => {
      console.error('User does not exist.', exception);
      res.status(400).json({message: 'Invalid input'});
    });
});

module.exports = router;