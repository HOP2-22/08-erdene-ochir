const User = require("../models/User");

exports.getUser = async (req, res) => {
  const users = await User.find();
  res.send(users);
};
exports.getUserById = async (req, res) => {
  const _id = req.params.id;
  const users = await User.find({ _id });
  res.send(users);
};
