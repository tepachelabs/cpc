var pkgJson = require('./package.json');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var stylus = require('stylus');
var expressSitemapXml = require('express-sitemap-xml')

var sitemap = require('./data/sitemap');

var captiveRouter = require('./routes/captive');
var indexRouter = require('./routes/index');
var menuRouter = require('./routes/menu');
var vipRouter = require('./routes/vip');
var ggj22Router = require('./routes/ggj22');
var testRouter = require('./routes/test');
var redirectionRouter = require('./routes/redirection');
var promosRouter = require('./routes/promos');

var app = express();

// sets the version of the app
app.use((req, _, next) => {
  req._VERSION = pkgJson.version;
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSitemapXml(() => sitemap, 'https://cultoperrocafe.com'))
app.use(stylus.middleware({
  dest: path.join(__dirname, 'public'),
  src: path.join(__dirname, 'public'),
  compile: (str, path) => stylus(str).set('filename', path).set('compress', true),
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/captive', captiveRouter);
app.use('/menu', menuRouter);
app.use('/frecuentes', vipRouter);
app.use('/test', testRouter);
app.use('/r', redirectionRouter);
app.use('/ggj22', ggj22Router);
app.use('/promos', promosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
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

module.exports = app;
