var express = require("express");
var router = express.Router();
const postController = require("../controllers/postsController");
/* GET home page. */
router.get("/add", postController.add);
// });
router.get("/detail/id/:id", postController.img);
module.exports = router;
