var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes       = require('./routes/');
var multipart = require('connect-multiparty');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(multipart({
    keepExtensions:true,
    uploadDir:"./public/uploadFile"
}));

app.use(require('cors')());

// 商品价格信息
app.use('/price_info', routes.price_info);

// 库存信息
app.use('/stock_info', routes.stock_info);

// 优惠券
app.use('/coupons', routes.coupons);

// 刷新超值抢购
app.use('/refresh_czqg', routes.refresh_czqg);

// 猜你喜欢
app.use('/like', routes.like);

// 底部广告位
app.use('/adver', routes.adver);

// top
app.use('/top', routes.top);

app.use('/redm', routes.redm);

app.use('/self_support', routes.self_support);

// redapp
app.use('/redapp', routes.redapp);

app.use('/buyer', routes.buyer);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
