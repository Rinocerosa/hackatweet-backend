<<<<<<< HEAD
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: String,
  username: String,
  password: String,
  token: String,
  profilImage: {
    type: String,
    image: "profil.png",
  },
  message: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "message",
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
=======
>>>>>>> messages
