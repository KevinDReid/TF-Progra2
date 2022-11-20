var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController')

router.get('/login', indexController.log);
router.post('/login', indexController.log);

module.exports = router;
