//******************************** VARIABLES / REQUIRE ********************************/
//*************************************************************************************/

require('dotenv').config();

const createError     = require('http-errors');
const express         = require('express');
const path            = require('path');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');
const logger          = require('morgan');
const knexConfig      = require('./knexfile');
const ENV         		= "development";
const knex            = require('knex')(knexConfig[ENV]);
const jwt             = require('jsonwebtoken');


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


app.use('/', indexRouter);
app.use('/merchants', merchantsRouter);
app.use('/deals', dealsRouter);


	
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
