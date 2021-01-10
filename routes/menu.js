const express = require('express');
const MetaBuilder = require("../data/meta");
const menu = require("../data/menu");

const router = express.Router();

const metaBuilder = new MetaBuilder()
  .setProp(MetaBuilder.TITLE, 'Nuestro Menú')
  .setProp(MetaBuilder.DESC, 'Cafetería Indie Experimental. Nuestros productos no se limitan a los aquí listados. Siempre estamos innovando en el laboratorio: nuestra cocina. Pregunta por nuestro menú experimental y las bebidas de temporada.')
  .setProp(MetaBuilder.URL, '/menu');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('menu', {
    ...metaBuilder.build(),
    ...menu,
    path: req.originalUrl
  });
});

module.exports = router;
