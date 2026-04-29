const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" }, // admin or user
  resetToken: String,
  resetTokenExpire: Date
});

module.exports = mongoose.model("User", userSchema);