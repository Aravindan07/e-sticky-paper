const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//User model
const User = require("../../models/user");
//Goal Model
// const Goal = require("../../models/goals");

router.post("/", auth, (req, res, next) => {
  const { userId, goalName, child } = req.body;
  User.findById(userId)
    .then((user) => {
      if (user.goals.length > 0) {
        console.log("Not in an Empty Goal");
        for (let dataObj in user.goals) {
          if (dataObj.goalName === goalName) {
            console.log(dataObj.goalName);
            dataObj.children = [...dataObj.children, child];
          }
          user.goals = [...dataObj];
        }
        user.save();
        return res.json({ status: 201, goals: user.goals });
      }
      console.log("Inside Empty Goal");
      let goalObj = {
        goalName: goalName,
        children: [],
      };
      user.goals.push(goalObj);
      user.save();
      return res.json({ status: 201, goals: user.goals });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

// router.post("/sub-goal", auth, (req, res, next) => {
//   const { userId, name, children } = req.body;
// });

module.exports = router;
