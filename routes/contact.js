var express = require('express');
var router = express.Router();

/* GET contact me page. */
router.get('/', function (req, res, next) {
    res.render('contact', {
        title: "Write to me",
        author: "Pimpek Max"
    });
});

module.exports = router;
