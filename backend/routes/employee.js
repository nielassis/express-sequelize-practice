const express = require("express");
const router = express.Router();
const { Employees, Position } = require("../models");
const employeeController = require("../controllers/employee");

router.get("/", employeeController.findAllEmployees);

router.post("/", employeeController.createEmployee);

router.put("/:id", employeeController.updateEmployee);

router.delete("/:id", employeeController.destroyEmployee);

module.exports = router;
