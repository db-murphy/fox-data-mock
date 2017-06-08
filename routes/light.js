var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	return res.status(200).json({
		light: global.light
	});
});

module.exports = router;