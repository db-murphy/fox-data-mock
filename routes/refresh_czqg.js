var express = require('express');
var router = express.Router();
var fs = require('fs');
var color = require('colorful');

router.get('/', function(req, res) {
	var date = new Date();
	var hoursNow = date.getHours();

	date.setHours(hoursNow + 1);

	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/refresh_czqg.json', 'utf8', function(err, data) {
        var mock_data = JSON.parse(data);

        mock_data.czqgEndTime = date.getTime();

        console.log(color.green('    √ 刷新超值抢购数据'));
        console.log(data);
        return res.status(200).jsonp(mock_data);
    });
});

module.exports = router;