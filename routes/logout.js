var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController')

router.get('/', indexController.logout);
router.post('/', indexController.logout);

module.exports = router;