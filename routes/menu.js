const express = require('express');
const MetaBuilder = require("../data/meta");
const menu = require("../data/menu");

const router = express.Router();

const metaBuilder = new MetaBuilder()
  .setProp(MetaBuilder.TITLE, 'Nuestro Menú')
  .setProp(MetaBuilder.DESC, 'Nuestros productos no se limitan a los aquí listados. Siempre estamos innovando en el laboratorio: nuestra cocina. Pregunta por nuestro menú experimental y las bebidas de temporada.')
  .setProp(MetaBuilder.URL, '/menu')
  .setProp(MetaBuilder.IMAGE, 'menu.png');

const groupProductsByCategory = (products) => {
  return products.reduce((acc, curr) => {
    if (!acc[curr.category_id]) {
      acc[curr.category_id] = [];
    }
    acc[curr.category_id].push(curr);
    return acc;
  }, {});
};

const formatPrice = (price) => (price / 100)

/* GET home page. */
router.get('/', async function (req, res) {
  const products = await menu.getProducts();
  res.render('menu', {
    ...metaBuilder.build(),
    path: req.originalUrl,
    products: groupProductsByCategory(products),
    formatPrice
  });
});

module.exports = router;
