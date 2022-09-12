var express = require('express');
var router = express.Router();
let controller = require('../controllers/dataController')
/* GET home page. */
<<<<<<< HEAD
router.get('/', controller.index);
=======
router.get('/', function(req, res, next) {
  res.render('index', { users: ''});
});
>>>>>>> 5fd75c260ca5fb429b504812acee8b7a16584aa9

module.exports = router;
