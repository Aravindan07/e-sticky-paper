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
  User.findById(userId)
    .then((user) => {
      if (user.goals.length > 0) {
        user.goals.forEach((userObj) => {
          if (userObj.goalName === goalName) {
            userObj.children.push(children);
            User.updateOne(
              { _id: userId, "goals.$.goalName": goalName },
              { $set: { "goals.$.children": children } }
            )
              .exec()
              .then((result) => {
                console.log(result);
                return res.json({ status: 201, goals: user.goals });
              })
              .catch((error) => {
                console.log("Error outside 1st if statement");
                return res.json({ error: error });
              });
            // User.updateOne(
            //   { _id: userId, "user.goals.$.goalName": goalName },
            //   { $push: { "user.goals.children": children } }
            // )
            //   .exec()
            //   .then((result) => {
            //     console.log(result);
            //     console.log("outside 1st if statement");
            //     return res.json({ status: 201, goals: user.goals });
            //   })
            //   .catch((error) => {
            //     console.log("Error outside 1st if statement");
            //     return res.json({ error: error });
            //   });
          }
        });
      } else {
        let goalData = {
          goalName: goalName,
          children: [],
        };
        user.goals.push(goalData);
        user
          .save()
          .then((result) => {
            console.log(result);
            console.log("outside all the if statements");
            return res.json({ status: 201, goals: user.goals });
          })
          .catch((error) => {
            console.log("Error outside all the if statements");
            return res.json({ error: error });
          });
      }
    })
    .catch((error) => {
      return res.json({ error: error });
    });

  //   const goalObj = () => {
  //     if (goalName === goalName)
  //       return {
  //         goalName: goalName,
  //         children: [children],
  //       };
  //   };
  //   User.findOneAndUpdate(
  //     { _id: userId },
  //     { $push: { goals: goalObj() } },
  //     function (error, success) {
  //       if (error) {
  //         console.log(error);
  //         res.json({ message: "success" });
  //         return;
  //       } else {
  //         console.log(success);
  //         res.json({ message: "error" });
  //         return;
  //       }
  //     }
  //   );
});

module.exports = router;
