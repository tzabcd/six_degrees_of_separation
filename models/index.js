var mongoose = require('mongoose');
console.log("开始连接数据库");
var db = mongoose.connect("mongodb://wilson:wilson@localhost:27017/wilson");
db.connection.on("error", function(error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function() {
    console.log("------数据库连接成功！------");
});

// model

var cat = require('./cat');


// 将model都暴露出去
exports.Cat = mongoose.model('Cat');
