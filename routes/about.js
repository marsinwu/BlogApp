var express = require('express');
var router = express.Router();

/* GET about me page. */
router.get('/', function (req, res, next) {
    res.render('about', {
        title: "About Me",
        author: "Pimpalek Max"
    });
});

module.exports = router;
