const knexConfig      = require('../knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const express 				= require('express');
const router 					= express.Router();
const jwt             = require('jsonwebtoken');
const auth            = require('../auth/auth');





module.exports = router;