var express = require("express");
var router = express.Router();
require("../models/connection");
const Message = require("../models/tweets");
const User = require("../models/users");

/* GET Messages listing. */
router.get("/", function (req, res) {
  Message.find()
    .populate({ path: "users" })
    .then((data) => {
      if (data.length > 0) {
        res.json({ result: true, info: data });
      } else {
        res.json({ result: false, info: "Your don't have any messages" });
      }
    });
});
/* send Messages listing. */
  if (req.body !== null && req.body !== undefined) {
    const newMessage = Message({
      user: req.body.userId,
      textContent: req.body.textContent,
      like: req.body.like,
      date: new Date(),
    });
    newMessage.save().then((data) => {
      res.json({ result: true, infos: data });
    });
  }
});
/* Delete Messages */
router.get("/delete/:id", function (req, res) {
  if (
    req.params.id.trim() !== "" &&
    req.params.id.trim() !== null &&
    req.params.id.trim() !== undefined
  ) {
    Message.deleteOne({ _id: req.params.id }).then((data) => {
      console.log(data);
      res.json({ result: true, info: "message Deleted" });
    });
  } else {
    res.json({ result: false, info: "insert a correct id" });
  }
});

module.exports = router;
