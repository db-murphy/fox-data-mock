var express = require('express');
var router = express.Router();
var fs = require('fs');
var color = require('colorful');

router.post('/', function(req, res) {
    var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/like.html', 'utf8', function(err, data) {
        console.log(color.green('    √ 猜你喜欢结构'));
        console.log(data);
        return res.status(200).send(data);
    });
});

module.exports = router;