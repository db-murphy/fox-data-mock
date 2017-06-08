var express = require('express');
var router = express.Router();
var fs = require('fs');
var color = require('colorful');

// 我关注的买手动态
router.get('/my_buyer_coll', function(req, res) {
	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/my_buyer_coll.html', 'utf8', function(err, data) {
        console.log(color.green('    √ 我关注的买手动态'));
        console.log(data);
        setTimeout(function() {
            return res.status(200).send(data);
        }, 1000);
    });
});

// 获取浏览数量
router.get('/colloIds', function(req, res) {
	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/colloIds.json', 'utf8', function(err, data) {
        var mock_data = JSON.parse(data);

        console.log(color.green('    √ 获取浏览数量'));
        console.log(data);
        return res.status(200).json(mock_data);
    });
});

// 获取搭配中的广告图
router.get('/getadimg', function(req, res) {
    var red_path = process.cwd();

    fs.readFile(red_path + '/db_mock/getadimg.json', 'utf8', function(err, data) {
        var mock_data = JSON.parse(data);

        console.log(color.green('    √ 获取搭配中的广告图'));
        console.log(data);
        return res.status(200).json(mock_data);
    });
});

// 关注
router.get('/attend', function(req, res) {
	var red_path = process.cwd();

	return res.status(200).send('1');
});

// 增加浏览数量
router.get('/addview', function(req, res) {
    var red_path = process.cwd();

    return res.status(200).json({});
});

// 平台推荐买手
router.get('/recommd_buyer', function(req, res) {
	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/recommd_buyer.html', 'utf8', function(err, data) {
        console.log(color.green('    √ 平台推荐买手'));
        console.log(data);
        return res.status(200).send(data);
    });
});

// 买手详情翻页
router.get('/buyer_detail_page', function(req, res) {
	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/buyer_detail_page.html', 'utf8', function(err, data) {
        console.log(color.green('    √ 买手详情翻页'));
        console.log(data);
        setTimeout(function() {
            return res.status(200).send(data);
        }, 1000);
    });
});

// 金牌买手翻页
router.get('/top_list', function(req, res) {
	var red_path = process.cwd();

	fs.readFile(red_path + '/db_mock/top_list.html', 'utf8', function(err, data) {
        console.log(color.green('    √ 金牌买手翻页'));
        console.log(data);
        setTimeout(function() {
            return res.status(200).send(data);
        }, 1000);
    });
});

// 商品列表翻页
router.get('/goods_list', function(req, res) {
    var red_path = process.cwd();

    fs.readFile(red_path + '/db_mock/buyer_goods_list.html', 'utf8', function(err, data) {
        console.log(color.green('    √ 商品列表翻页'));
        console.log(data);
        setTimeout(function() {
            return res.status(200).send(data);
        }, 1000);
    });
});

// 买手排行榜翻页
router.get('/buyer_top_page', function(req, res) {
    var red_path = process.cwd();

    fs.readFile(red_path + '/db_mock/buyer_top_page.html', 'utf8', function(err, data) {
        console.log(color.green('    √ 买手排行榜翻页'));
        console.log(data);
        setTimeout(function() {
            return res.status(200).send(data);
        }, 1000);
    });
});

module.exports = router;