const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 50 },
  mail: { type: String, required: true, min: 3, max: 100 },
  password: { type: String, required: true, min: 6, max: 200 },
  admin: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
