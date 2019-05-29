var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({ title: 'WOW it works from node js API 🚀' });
});

module.exports = router;
