var express = require("express");
var router = express.Router();
const postController = require("../controllers/postsController");

let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/posts/'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});

router.get("/add", postController.add);
router.post("/add", upload.single('foto'), postController.create);
router.get("/detail/id/:id", postController.img);

router.get('/update/:id', postController.update)
router.post('/update', postController.updatePost)
router.post('/delete/:id', postController.destroy);

module.exports = router;

