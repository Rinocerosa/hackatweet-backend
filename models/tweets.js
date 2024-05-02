const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  textContent: String,
  like: Number,
  date: Date,
});

const Message = mongoose.model("message", MessageSchema);

module.exports = Message;
