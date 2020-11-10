const express = require('express');
const {
    getInstagramPosts,
    refreshInstagramPosts,
} = require("../data/instagram");

const router = express.Router();

router.get('/', function (req, res, next) {
    const data = getInstagramPosts();

    res.json({posts: data});
});

router.get('/refresh', function (req, res, next) {
    refreshInstagramPosts();
    res.json();
});

module.exports = router;
