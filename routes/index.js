var express = require('express');
var router = express.Router();

const meta = {
  title: 'El Culto al Perro Café',
  description: 'Cafetería Indie Experimental. Cafetería que entiende a la gente que trabaja. Hermosillo, Sonora.',
  url: 'https://cultoperrocafe.com',
  image: 'https://cultoperrocafe.com/images/social.jpg',
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {...meta, path: req.originalUrl});
});

module.exports = router;
