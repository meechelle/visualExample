var express = require('express');
var router = express.Router();
var Miso = require('miso.dataset');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Visual Example' });
});

module.exports = router;
