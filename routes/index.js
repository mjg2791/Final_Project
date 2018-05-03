const path = require("path");
const router = require("express").Router();
const database = require("./api/database");

// Router for database communication
router.use("/api", database);

// Default route to index.html
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Export and return route results
module.exports = router;