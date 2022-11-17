var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController");


router.get('/', indexController.reg);

router.post("/", indexController.store);

module.exports = router;
