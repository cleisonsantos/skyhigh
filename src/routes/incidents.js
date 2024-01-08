const router = require("express").Router();

const checkToken = require("../middlewares/checkToken");

const incidentsController = require("../controllers/incidentsController");

//const { isAuthenticated } = require("../middlewares/isAuthenticated");

router.get("/", checkToken, incidentsController.getAll);

module.exports = router;