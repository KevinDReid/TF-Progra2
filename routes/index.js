var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController')
let db = require("../database/models")

router.get('/', indexController.index);
router.post('/', indexController.newComment)

router.get('/prueba', async(req,res)=>{
    res.send(await db.Usuario.findAll())
});


module.exports = router;
