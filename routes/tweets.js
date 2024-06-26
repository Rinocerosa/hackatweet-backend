var express = require("express");
var router = express.Router();
require("../models/connection");
const Message = require("../models/tweets");
const User = require("../models/users");

/* GET Messages listing. */
router.get("/", function (req, res) {
  Message.find()
    .populate("user")
    .then((data) => {
      if (data.length > 0) {
        res.json({ result: true, info: data });
      } else {
        res.json({ result: false, info: "Your don't have any messages" });
      }
    });
});
/* send Messages listing. */
router.post("/send", function (req, res) {
  if (
    req.body !== null &&
    req.body !== undefined &&
    req.body.textContent.trim() !== ""
  ) {
    const newMessage = Message({
      user: req.body.userId,
      textContent: req.body.textContent,
      like: req.body.like,
      date: new Date(),
    });
    newMessage.save().then((data) => {
      Message.findOne({ _id: data._id })
        .populate("user")
        .then((data) => {
          console.log(data.user);
          if (data.user.length > 0) {
            const infoData = {
              textContent: data.textContent,
              like: data.like,
              date: data.date,
              userFirstname: data.user[0].firstname,
              userUsername: data.user[0].username,
              userToken: data.user[0].token,
            };
            res.json({ result: true, infos: infoData });
          } else {
            res.json({ result: false, infos: [] });
          }
        });
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
/* Update like */
router.post("/update", function (req, res) {
  if (req.body.id !== "" && req.body.id !== null && req.body.id !== undefined) {
    Message.updateOne({ _id: req.body.id }, { like: req.body.like }).then(
      (data) => {
        res.json({ result: true, info: "message updated" });
      }
    );
  } else {
    res.json({ result: false, info: "insert a correct id" });
  }
});

module.exports = router;
