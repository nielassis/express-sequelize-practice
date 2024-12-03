const findAllPositions = async (req, res) => {
  try {
    const positions = await Position.findAll();
    res.json(positions);
  } catch (err) {
    res.status(500).json({ err: "error while trying to find positions" });
  }
};

const createPosition = async (req, res) => {
  try {
    const positions = await Position.create(req.body);
    res.status(201);
  } catch (err) {
    res.status(500).json({ err: "DB error" });
  }
};

const updatePosition = async (req, res) => {
  try {
    const [position] = await Position.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (position) {
      const newPosition = await Position.findOne({
        where: { id: req.params.id },
      });
      res.json(newPosition);
    } else {
      throw new Error("Non Undentified Position");
    }
  } catch (err) {
    res.status(500).json({ err: "DB error" });
  }
};

const destroyPosition = async (req, res) => {
  try {
    const positionsDeleted = await Position.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (positionsDeleted) {
      res.status(204).send;
    } else {
      throw new Error("Non Undentified Position");
    }
    res.json(positions);
  } catch (err) {
    res.status(500).json({ err: "DB error" });
  }
};

module.exports = {
  findAllPositions,
  createPosition,
  updatePosition,
  destroyPosition,
};
