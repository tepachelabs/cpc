const express = require('express');
const MetaBuilder = require("../data/meta");

const router = express.Router();

const metaBuilder = new MetaBuilder()
  .setProp(MetaBuilder.TITLE, 'Global Game Jam 2021 sede Hermosillo')
  .setProp(MetaBuilder.DESC, 'Cafetería Indie Experimental. Página con información de la sede oficial de la Global Game Jam 2021 "Hermosillo".')
  .setProp(MetaBuilder.URL, '/ggj21');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('ggj21', { ...metaBuilder.build(), path: req.originalUrl });
});

module.exports = router;
