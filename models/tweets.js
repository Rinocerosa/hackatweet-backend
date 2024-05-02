const mongoose = require("mongoose");

<<<<<<< HEAD
const tweetSchema = mongoose.schema({});
=======
const MessageSchema = mongoose.Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  textContent: String,
  like: Number,
  date: Date,
});

const Message = mongoose.model("message", MessageSchema);

module.exports = Message;
>>>>>>> messages
