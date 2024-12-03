const express = require("express");
const router = express.Router();
const { Employees, Position } = require("../models");
const employeeController = require("../controllers/employee");
const authMiddleware = require("../middleware/middleware");

router.get("/", authMiddleware, employeeController.findAllEmployees);

router.post("/", authMiddleware, employeeController.createEmployee);

router.put("/:id", authMiddleware, employeeController.updateEmployee);

router.delete("/:id", authMiddleware, employeeController.destroyEmployee);

module.exports = router;
