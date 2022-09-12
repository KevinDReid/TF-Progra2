var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/myProfile', function(req, res, next) {
  res.send('users', { title: 'Express' });
});
router.get('/editProfile', function(req, res, next) {
  res.render('users', { title: 'Express' });
});
router.get('/id/:id', usersController.userDetail)

module.exports = router;
