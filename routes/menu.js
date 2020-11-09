var express = require('express');
var router = express.Router();
var menu = require("../data/menu");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('menu', {...menu, path: req.originalUrl});
});

module.exports = router;
