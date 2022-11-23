var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexController");

let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usuarios/'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});

router.get('/', indexController.reg);
router.post("/", upload.single('foto'), indexController.store);

module.exports = router;
