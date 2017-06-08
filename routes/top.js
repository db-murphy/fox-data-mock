var express = require('express');
var router = express.Router();

var top = require('../actions/top');

router.get('/list', top.list);

module.exports = router;