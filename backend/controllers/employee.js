const findAllEmployees = async (req, res) => {
  try {
    const employees = await Employees.findAll({
      include: [Position],
    });
    res.json(employees);
  } catch (err) {
    res.status(500).json({ err: "DB error" });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employees = await Employees.create(req.body);
    res.status(201);
  } catch (err) {
    res.status(500).json({ err: "DB error" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const [employee] = await Employees.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (employee) {
      const newEmployees = await Employees.findOne({
        where: { id: req.params.id },
      });
      res.json(newEmployees);
    } else {
      throw new Error("Non Undentified Employees");
    }
  } catch (err) {
    res.status(500).json({ err: "DB error" });
  }
};

const destroyEmployee = async (req, res) => {
  try {
    const employeesDeleted = await Employees.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (employeesDeleted) {
      res.status(204).send;
    } else {
      throw new Error("Non Undentified Employees");
    }
    res.json(employees);
  } catch (err) {
    res.status(500).json({ err: "DB error" });
  }
};

module.exports = {
  findAllEmployees,
  createEmployee,
  updateEmployee,
  destroyEmployee,
};
