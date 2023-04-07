const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', async function (req, res) {
  res.redirect(302, 'https://instagram.com/cultoperrocafe')
});

module.exports = router;
