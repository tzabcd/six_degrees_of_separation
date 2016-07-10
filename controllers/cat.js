var Cat = require('../models').Cat;
var upload = require('../middleware/upload');

exports.get = function(req, res) {
    Cat.find({}, function(err, findData) {
        var data = {
            "test": findData
        };
        res.render('index.jade', data);
    });
};

exports.post = function(req, res) {

    upload.single('test')(req, res, function(err) {
        if (err) {
            // An error occurred when uploading
            return false;
        } else {
            console.log('成功');
            var oneCat = new Cat({
                name: req.body.name,
                age: req.body.age,
                friends: req.body.friends
            });
            oneCat.save(function(err, response) {
                if (err) {
                    console.log('出错了');
                } else {

                    res.send(response);
                }
            });
        }
    });

};
