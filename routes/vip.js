const express = require('express');
const MetaBuilder = require("../data/meta");

const router = express.Router();

const metaBuilder = new MetaBuilder()
  .setProp(MetaBuilder.TITLE, 'Clientes Frecuentes')
  .setProp(MetaBuilder.DESC, 'Programa de recompensas para clientes frecuentes, solo para clientes perrones. Creado para premiarte por tu consumo.')
  .setProp(MetaBuilder.URL, '/frecuentes')
  .setProp(MetaBuilder.IMAGE, 'vip.png');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('vip', {
    ...metaBuilder.build(),
    version: req._VERSION,
    path: req.originalUrl
  });
});

module.exports = router;
