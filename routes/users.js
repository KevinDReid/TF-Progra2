var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");

let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/usuarios'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});

router.get("/myProfile", usersController.myProfile);
router.get("/id/:id", usersController.userDetail);
router.get("/myProfile/edit", usersController.editProfile);



module.exports = router;
