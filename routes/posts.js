var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add', function(req, res, next) {
  res.render('posts', { title: 'Express' });
});
router.get('/detail/id/:id', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
module.exports = router;
