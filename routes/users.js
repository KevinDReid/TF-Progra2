var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/myProfile', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/editProfile', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/id/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
