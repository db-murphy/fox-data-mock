var express = require('express');
var router = express.Router();

var coupons = require('../actions/coupons');

router.post('/get_dom', coupons.get_dom);

router.post('/get_coupon', coupons.get_coupon);

router.post('/status', coupons.get_status);

module.exports = router;