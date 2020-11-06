const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//User model
const User = require("../../models/user");
//Goal Model
// const Goal = require("../../models/goals");

router.post("/", auth, (req, res, next) => {
  const { userId, goalName, children } = req.body;
  console.log(userId, goalName, children);
  // User.findById(userId)
  //   .then((user) => {
  //     let newChildren;
  //     const saveChild = () => {
  //       user.goals.forEach((goal) => {
  //         if (goal.goalName === goalName) {
  //           console.log(goal);
  //           newChildren = goal.children.push(children);
  //         }
  //       });
  //       return newChildren;
  //     };
  //     console.log(user);
  //     if (user.goals.length > 0) {
  //       console.log("Not empty array");
  //       User.updateOne(
  //         { "user._id": userId, "user.goals.goalName": goalName },
  //         {
  //           $push: {
  //             "goals.$.children": saveChild(),
  //           },
  //         }
  //       )
  //         .exec()
  //         .then((result) => {
  //           console.log(result);
  //           return res.json({ status: 201, goals: user.goals });
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           return res.json({ error: err });
  //         });
  //       return;
  //     }
  //     console.log("Inside Empty Goal");
  //     let goalObj = {
  //       goalName: goalName,
  //       children: [],
  //     };
  //     user.goals.push(goalObj);
  //     user
  //       .save()
  //       .then((result) => {
  //         console.log("unexpected");
  //         return res.json({ status: 201, goals: result.goals });
  //       })
  //       .catch((err) => {
  //         return res.json({ error: err });
  //       });
  //   })
  //   .catch((err) => {
  //     console.log("Inside 2");
  //     res.json({ error: err });
  //   });
  goalObj = {
    goalName: goalName,
    children: [...children],
  };
  User.findOneAndUpdate(
    { _id: userId },
    { $push: { goals: goalObj } },
    function (error, success) {
      if (error) {
        console.log(error);
        res.json({ message: "success" });
        return;
      } else {
        console.log(success);
        res.json({ message: "error" });
        return;
      }
    }
  );
});

// router.post("/sub-goal", auth, (req, res, next) => {
//   const { userId, name, children } = req.body;
// });

module.exports = router;
