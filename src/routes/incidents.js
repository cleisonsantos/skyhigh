const router = require("express").Router();

const incidentsController = require("../controllers/incidentsController");

//const { isAuthenticated } = require("../middlewares/isAuthenticated");

router.get("/", incidentsController.getAll);

module.exports = router;