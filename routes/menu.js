const express = require('express');
const MetaBuilder = require("../data/meta");

const router = express.Router();

const metaBuilder = new MetaBuilder()
  .setProp(MetaBuilder.TITLE, 'Nuestro Menú')
  .setProp(MetaBuilder.DESC, 'Nuestros productos no se limitan a los aquí listados. Siempre estamos innovando en el laboratorio: nuestra cocina. Pregunta por nuestro menú experimental y las bebidas de temporada.')
  .setProp(MetaBuilder.URL, '/menu')
  .setProp(MetaBuilder.IMAGE, 'menu.png');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('menu', { ...metaBuilder.build(), path: req.originalUrl });
});

module.exports = router;
