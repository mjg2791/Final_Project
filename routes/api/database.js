const router = require("express").Router();
const databaseController = require("../../controllers/databaseController");

router.route("/newUser")
	.post(databaseController.newUser);

router.route("/logIn/:username/:password")
	.get(databaseController.logIn);

router.route("/saveList")
	.post(databaseController.saveList);

router.route("/getSavedLists/:id")
	.get(databaseController.getSavedLists);	


module.exports = router;