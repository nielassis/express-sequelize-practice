const express = require("express");
const router = express.Router();
const { Position } = require("../models");
const positionController = require("../controllers/position");

router.get("/", positionController.findAllPositions);

router.post("/", positionController.createPosition);

router.put("/:id", positionController.updatePosition);

router.delete("/:id", positionController.destroyPosition);

module.exports = router;
