const router = require("express").Router();

const checkToken = require("../middlewares/checkToken");

const incidentsController = require("../controllers/incidentsController");

router.get("/", checkToken, incidentsController.getAll);
router.patch('/:id', checkToken, incidentsController.updateIncidentStatus);

module.exports = router;