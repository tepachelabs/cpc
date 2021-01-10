const express = require('express');
const MetaBuilder = require("../data/meta");

const router = express.Router();
const metaBuilder = new MetaBuilder();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { ...metaBuilder.build(), path: req.originalUrl });
});

module.exports = router;
