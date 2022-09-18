var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");

/* GET users listing. */
router.get("/myProfile", usersController.myProfile);
// router.get('/editProfile', );
router.get("/id/:id", usersController.userDetail);

router.get("/myProfile/edit", usersController.editProfile);
module.exports = router;
