const router = require("express").Router();
const listRoutes = require("./List");


router.use("/List", listRoutes);

module.exports = router;