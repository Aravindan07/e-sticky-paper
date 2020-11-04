const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//User model
const User = require("../../models/user");
//Goal Model
// const Goal = require("../../models/goals");

router.post("/", auth, (req, res, next) => {
  const { userId, goalName, children } = req.body;
  User.findById(userId)
    .then((user) => {
      user.goals = goalName;
      user.save();
      return res.json({ status: 201, goals: user.goals });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

module.exports = router;
