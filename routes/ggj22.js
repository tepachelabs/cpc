const express = require('express');
const MetaBuilder = require("../data/meta");

const router = express.Router();

const metaBuilder = new MetaBuilder()
  .setProp(MetaBuilder.TITLE, '#GGJ22')
  .setProp(MetaBuilder.DESC, 'Cafetería Indie Experimental. Página con información de la sede oficial de la Global Game Jam™ 2022 "Hermosillo".')
  .setProp(MetaBuilder.URL, '/ggj22');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('ggj22', {
    ...metaBuilder.build(),
    version: req._VERSION,
    path: req.originalUrl
  });
});

module.exports = router;
