//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

require('dotenv').config();

const createError     = require('http-errors');
const express         = require('express');
const path            = require('path');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');
const logger          = require('morgan');
const session         = require("express-session");
const knexConfig      = require('./knexfile');
const ENV         		= process.env.ENV || "development";
const knex            = require('knex')(knexConfig[ENV]);
const passport        = require("passport");
const LocalStrategy   = require("passport-local").Strategy;

//********************************* EXTERNAL ROUTES ***********************************/
//*************************************************************************************/

const indexRouter = require('./routes/index');
const merchantsRouter = require('./routes/merchants');
const dealsRouter = require('./routes/deals');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/merchants', merchantsRouter);
app.use('/deals', dealsRouter);

passport.use(new LocalStrategy({ usernameField: "email", passwordField: "password"},
  function(email, password, done) {
    knex
      .select('*')
      .from("merchants")
      .where("email", email)
      .first()
      .then(merchant => {
        console.log(`merchant: ${merchant.id}`);
        if(!merchant || password != merchant.password) {
          return done(null, false, { message: 'Invalid credentials' });
        } else {
          return done(null, merchant);
        }      
      });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
	
//****************************** ERROR & CATCH ROUTES *********************************/
//*************************************************************************************/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res,) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//********************************** MODULE EXPORT ************************************/
//*************************************************************************************/

module.exports = app;
