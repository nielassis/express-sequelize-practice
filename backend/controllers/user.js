const User = require("../models");
const bcrypt = require("bcrypt");
const auth = require("../utils/auth");

const login = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).json({ message: "All fields must be filled" });
    }
    const user = user.findOne({ where: { name } });
    if (user) {
      const passwordValid = bcrypt.compareSync(password, user.password);
      if (passwordValid) {
        const token = auth.generateToker(user.name);
        res.json(token).statusCode(200);
      } else {
        throw new Error("Invalid password");
      }
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    res.statusCode(500).json({ err: "DB error" });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).json({ message: "All fields must be filled" });
    }
    const passwordHash = bcrypt.hashSync(password, 8);
    user.create({ name, password: passwordHash });
    res.statusCode(201).send();
  } catch (err) {
    throw new Error("DB error");
  }
};

module.exports = {
  login,
  createUser,
};
