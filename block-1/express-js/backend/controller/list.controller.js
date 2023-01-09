const { response } = require("express");
const User = require("../models/User");

exports.getList = async (req, res) => {
  const _id = req.params.id;
  const user = await List.find({ _id });
  res.send(user);
};
exports.getListByUser = async (req, res) => {
  const _id = req.params.id;
  const user = await List.find({ _id });
  res.send(user);
};
exports.getListByTag = async (req, res) => {
  const tag = req.params.tag;
  const user = await List.find({
    tags: [tag],
  });

  res.send(user);
};
exports.getListById = async (req, res) => {
  const _id = req.params.id;
  const user = await List.find({ _id });
  res.send(user);
};
exports.createList = async (req, res) => {
  const _id = req.params.id;
  const user = await List.find({ _id });
  res.send(user);
};
exports.updateList = async (req, res) => {
  const _id = req.params.id;
  const user = await List.find({ _id });
  res.send(user);
};
exports.deleteList = async (req, res) => {
  const _id = req.params.id;
  const user = await List.find({ _id });
  res.send(user);
};
