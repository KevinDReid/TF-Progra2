var express = require("express");
var router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.results);

module.exports = router;
