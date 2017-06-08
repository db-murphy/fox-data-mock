var express = require('express');
var router = express.Router();

var stock = require('../actions/stock_info');

router.post('/index', stock.stock_index);

module.exports = router;