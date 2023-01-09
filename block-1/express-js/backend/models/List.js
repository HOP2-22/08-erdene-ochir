const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  text: { type: String },
  likes: { type: Number, default: 0 },
  link: { type: String },
  tags: { type: Array },
  publisDate: { type: Date, default: new Date() },
  owner: User,
});

const List = mongoose.model("users", ListSchema);
module.exports = List;
