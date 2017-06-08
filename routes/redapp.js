var express = require('express');
var router = express.Router();

var redapp = require('../actions/redapp');

router.get('/order_get', redapp.orderGet);

router.get('/pay', redapp.orderPay);

router.get('/order_delete', redapp.orderDelete);

router.get('/comments', redapp.comments);

router.get('/imgs', redapp.imgs);

module.exports = router;