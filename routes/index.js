var express = require('express');
const { index } = require('../controllers/indexController');
var router = express.Router();
let indexController = require('../controllers/indexController')
let db = require("../database/models")

router.get('/', indexController.index);

router.get('/prueba', async(req,res)=>{
    res.send(await db.Usuario.findAll())
});
module.exports = router;
