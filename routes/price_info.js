var express = require('express');
var router = express.Router();

var price = require('../actions/price_info');

router.get('/index', price.price_index);

module.exports = router;