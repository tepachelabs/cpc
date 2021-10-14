var express = require('express');
const links = require("../data/links");

var router = express.Router();

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const link = links[id] || '/';

  res.redirect(link);
});

module.exports = router;
