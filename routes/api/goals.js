const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const mongoose = require("mongoose");

//User model
const User = require("../../models/user");
const user = require("../../models/user");

router.put("/", auth, (req, res, next) => {
  const { userId, goalName, children } = req.body;
  User.findById(userId)
    .then((user) => {
      if (children) {
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
            return res.json({ status: 201, goals: result.goals });
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

router.put("/:goalId/delete", (req, res, next) => {
  const { userId, goalId } = req.body;
  console.log(userId, goalId);
  User.findById(userId)
    .then((user) => {
      let modified = user.goals.filter((el) => {
        return String(el._id) !== String(goalId);
      });
      user.goals = modified;
      user
        .save()
        .then((data) => {
          return res.json({
            status: 200,
            message: "Goal deleted successfully",
            goals: data.goals,
          });
        })
        .catch((error) => {
          console.log(error);
          return res.json({ error: error });
        });
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error: error });
    });
});

router.put("/:goalId/child/delete", (req, res, next) => {
  const { userId, goalId, chidName } = req.body;
  User.findById(userId).then((user) => {
    let modifiedChild = user.goals.children.filter((el) => {
      console.log(el);
      return el !== childName;
    });
  });
});

module.exports = router;
