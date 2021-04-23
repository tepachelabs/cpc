var express = require('express');
const MetaBuilder = require("../data/meta");
const starred = require("../data/starred");

const feed = [
  'pins',
  'hat',
  'pin',
  'cup'
].map(item => `/images/pictures/swag-${ item }.jpg`);

var router = express.Router();

const metaBuilder = new MetaBuilder()
  .setProp(MetaBuilder.TITLE, 'Bienvenidx')
  .setProp(MetaBuilder.DESC, 'Portal de usuarios.')
  .setProp(MetaBuilder.URL, '/home');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('captive', {
    ...metaBuilder.build(),
    path: req.originalUrl,
    starred,
    feed
  });
});

module.exports = router;
