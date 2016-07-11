var express = require('express');
var router = express.Router();


// 引入controllers部分
var cat = require('./controllers/cat');

router.get('/index.jade', cat.get);
router.post('/cat', cat.post);


module.exports = router;
