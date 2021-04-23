const express = require('express');
const MetaBuilder = require("../data/meta");

const router = express.Router();
const metaBuilder = new MetaBuilder();
const starred = [
  { title: 'Espresso Limonada', image: '/images/products/limonada.jpg' },
  { title: 'Gran Danés', image: '/images/products/danes.jpg' },
  { title: 'Latte Moccha', image: '/images/products/moccha.jpg' },
  { title: 'Frappé Tepache', image: '/images/products/tepache.jpg' },
];
const feed = [
  '/images/products/01.jpg',
  '/images/products/02.jpg',
  '/images/products/03.jpg',
  '/images/products/04.jpg',
  '/images/products/05.jpg',
  '/images/products/06.jpg',
  '/images/products/07.jpg',
  '/images/products/08.jpg',
];
const reviews = [
  {
    author: 'Henda Villalobos',
    comment: 'Buenisimo todo, la atención es muy buena y el lugar muy agradable. Recomiendo ampliamente el smoothie de aguacate✨'
  },
  {
    author: 'Anhi Gmz Crdns',
    comment: 'Super recomendado. El trato es amable, y el café muy rico a precios accesibles, también fueron amigables con mi mascota 🐶. Me gustó mucho!'
  },
  {
    author: 'Miguel Madrid',
    comment: 'Buena atención al cliente, precios económicos, ambiente agradable, Pet-friendly y cuenta con las medidas sanitarias ante la actual pandemia.'
  },
];

/* GET home page. */
router.get('/', function (req, res) {
  res.render('test', { ...metaBuilder.build(), path: req.originalUrl, starred, feed, reviews });
});

module.exports = router;
