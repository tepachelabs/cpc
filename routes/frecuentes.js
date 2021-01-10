const express = require('express');
const MetaBuilder = require("../data/meta");

const router = express.Router();

const metaBuilder = new MetaBuilder()
  .setProp(MetaBuilder.TITLE, 'Clientes Frecuentes')
  .setProp(MetaBuilder.DESC, 'Cafetería Indie Experimental. Programa de clientes frecuentes, solo para clientes perrones. Te presentamos nuestro programa de recompensas, creado para premiarte por tu consumo.')
  .setProp(MetaBuilder.URL, '/frecuentes');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('frecuentes', { ...metaBuilder.build(), path: req.originalUrl });
});

module.exports = router;
