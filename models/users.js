const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: String,
  username: String,
  password: String,
  token: String,
  profilImage: String,
  message: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "message",
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
