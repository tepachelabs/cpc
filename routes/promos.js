var express = require('express');
const MetaBuilder = require("../data/meta");
const starred = require("../data/starred");

const feed = [
  'pins',
  'hat',
  'pin',
  'cup'
].map(item => ({
  src: `/images/pictures/swag-${ item }.jpg`,
  srcset: `/images/pictures/swag-${ item }-145.jpg 480w, /images/pictures/swag-${ item }-210.jpg 960w`,
  alt: 'Productos promocionales',
}));

var router = express.Router();

const metaBuilder = new MetaBuilder()
  .setProp(MetaBuilder.TITLE, 'Promos del mes')
  .setProp(MetaBuilder.DESC, 'Nuestras promos del mes. Síguenos en nuestras redes sociales para enterarte de las promos temporales. Estamos como @cultoperrocafe en todos lados.')
  .setProp(MetaBuilder.URL, '/promos');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('promos', {
    ...metaBuilder.build(),
    version: req._VERSION,
    path: req.originalUrl,
    starred,
    feed
  });
});

module.exports = router;
