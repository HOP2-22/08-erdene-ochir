const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
    minlenght: [6, "Firstname lenght must be at least 6 characters"],
    maxlenght: [50, "Firstname lenght must be at least 50 characters"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
    maxlenght: [50, "Lastname lenght must be at least 50 characters"],
  },
  email: { type: String, required: true, message: "email is required" },
  phone: String,
  picture: String,
  dateOfBirth: Date,
  registerDate: { type: Date, default: Date.now },
});
