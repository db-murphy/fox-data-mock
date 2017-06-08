var express = require('express');
var fs = require('fs');
var router = express.Router();
var color = require('colorful');
var multipart = require('connect-multiparty');
var upload = new multipart();

router.post('/uploadfile', upload, function(req, res) {
    console.log(color.green('    √ 文件上传'));

    var url = req.files.picture.path.split('public/')[1];
    console.log(url)
    return res.status(200).json({
        url: 'http://127.0.0.1:3100/' + url
    });
});

module.exports = router;