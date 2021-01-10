const express = require('express');
const MetaBuilder = require("../data/meta");

const router = express.Router();

const metaBuilder = new MetaBuilder()
  .setProp(MetaBuilder.TITLE, 'COVID-19')
  .setProp(MetaBuilder.DESC, 'Cafetería Indie Experimental. Medidas temporales por COVID-19. Por tu seguridad y la de nuestro staff, éstas son las medidas obligatorias que implementamos.')
  .setProp(MetaBuilder.URL, '/covid-19');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('covid', { ...metaBuilder.build(), path: req.originalUrl });
});

module.exports = router;
