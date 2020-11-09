const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const mongoose = require("mongoose");

//User model
const User = require("../../models/user");

router.put("/", auth, (req, res, next) => {
  const { userId, goalName, children } = req.body;
  User.findById(userId)
    .then((user) => {
      if (user.goals.length > 0) {
        user.goals.forEach((userObj) => {
          if (userObj.goalName === goalName) {
            userObj.children.push(children);
            user
              .save()
              .then((result) => {
                return res.json({ status: 201, goals: result.goals });
              })
              .catch((error) => {
                console.log(error);
                return res.json({ error: error });
              });
          }
        });
      } else {
        let goalData = {
          _id: new mongoose.Types.ObjectId(),
          goalName: goalName,
          children: [],
        };
        user.goals.push(goalData);
        user
          .save()
          .then((result) => {
            return res.json({ status: 201, goals: user.goals });
          })
          .catch((error) => {
            console.log("Error outside all the if statements");
            return res.json({ error: error });
          });
      }
    })
    .catch((error) => {
      return res.json({ error: error, message: "An error occurred" });
    });
});

module.exports = router;
