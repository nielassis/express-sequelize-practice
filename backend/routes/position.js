const express = require("express");
const router = express.Router();
const { Position } = require("../models");
const positionController = require("../controllers/position");
const authMiddleware = require("../middleware/middleware");

router.get("/", authMiddleware, positionController.findAllPositions);

router.post("/", authMiddleware, positionController.createPosition);

router.put("/:id", authMiddleware, positionController.updatePosition);

router.delete("/:id", authMiddleware, positionController.destroyPosition);

module.exports = router;
