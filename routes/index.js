var express = require('express');
var router = express.Router();
let data = require('../db/data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { users: ''});
});

module.exports = router;
