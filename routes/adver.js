var express = require('express');
var router = express.Router();
var fs = require('fs');
var color = require('colorful');

router.get('/', function(req, res) {
	return res.status(200).json({
		imgUrl: '../build/images/weixin_code.jpg',
		mLinkUrl: 'http://wwww.baidu.com',
		appLinkUrl: 'http://wwww.baidu.com'
	});
});

module.exports = router;