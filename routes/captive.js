var express = require('express');
var router = express.Router();
var meta = require("../data/meta");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('captive', { ...meta, path: req.originalUrl });
});

module.exports = router;
