var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sql = require('mssql');
var ip = require('ip');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getDataRouter = require('./routes/data');

var request = require('request');
var bodyParser = require('body-parser');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//==================Routes====================//
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data', getDataRouter);

//=================Database connection===============//
sqlConnection = require('./sqlConnect.js');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.post(function (req, res, next) {
  console.log(req.body.user.name);
});
app.get(function (req, res, next) {
  next();
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = {
  app: app,
  sql: sql,
  request: request,
  ip: ip
}