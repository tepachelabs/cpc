const express = require('express');
const MetaBuilder = require("../data/meta");
const starred = require("../data/starred");
const feed = require("../data/feed");
const reviews = require("../data/reviews");

const router = express.Router();
const metaBuilder = new MetaBuilder();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    ...metaBuilder.build(),
    version: req._VERSION,
    path: req.originalUrl,
    starred,
    feed,
    reviews
  });
});

module.exports = router;
