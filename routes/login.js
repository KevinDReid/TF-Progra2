var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController')

router.get('/', indexController.log);

module.exports = router;
