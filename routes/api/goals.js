const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const mongoose = require("mongoose");

//User model
const User = require("../../models/user");

// Add a main goal name
router.put("/goal-name", (req, res, next) => {
  const { userId, goalName } = req.body;
  User.findById(userId)
    .then((user) => {
      let goalData = {
        _id: new mongoose.Types.ObjectId(),
        mainGoalName: goalName,
        userGoals: [],
      };
      user.goals.push(goalData);
      user.save().then((result) => {
        return res.json({ status: 201, goals: result.goals });
      });
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error: error, message: "An error occurred" });
    });
});

//Add a sub-goal
router.put("/:goalId/add-sub-goal", auth, (req, res, next) => {
  const { userId, goalName, goalId } = req.body;
  User.findById(userId)
    .then((user) => {
      let findedGoal = user.goals.find((el) => {
        return String(el._id) === String(goalId);
      });
      console.log(findedGoal);
      let data = {
        _id: new mongoose.Types.ObjectId(),
        goalName: goalName,
        children: [],
      };
      findedGoal.userGoals.push(data);
      user
        .save()
        .then((result) => {
          return res.json({ status: 201, goals: result.goals });
        })
        .catch((error) => {
          console.log("Error outside all the if statements");
          return res.json({ error: error });
        });
    })
    .catch((error) => {
      return res.json({ error: error, message: "An error occurred" });
    });
});

//Add a child-goal
router.put("/:goalId/:subGoalId/add-child-goal", (req, res, next) => {
  const { userId, goalId, subGoalId, children } = req.body;
  User.findById(userId)
    .then((user) => {
      let findedGoal = user.goals.find((el) => {
        return String(el._id) === String(goalId);
      });
      console.log(findedGoal);
      let addChild = findedGoal.userGoals.find((el) => {
        return String(el._id) === subGoalId;
      });
      console.log(addChild);
      addChild.children.push(children);
      user
        .save()
        .then((result) => {
          return res.json({ status: 201, goals: result.goals });
        })
        .catch((error) => {
          console.log(error);
          return res.json({ error: error });
        });
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error: error, message: "An error occurred" });
    });
});

//Delete a sub-goal
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

//Add a child-goal
router.put("/:goalId/child/delete", (req, res, next) => {
  const { userId, goalId, subGoalId, childId } = req.body;
  User.findById(userId)
    .then((user) => {
      let findedGoal = user.goals.find((el) => {
        return String(el._id) === String(goalId);
      });
      console.log(findedGoal);
      let findedSubGoal = findedGoal.userGoals.find((el) => {
        return String(el._id) === String(subGoalId);
      });
      let modifiedChild = findedSubGoal.children.filter((el) => {
        return String(el._id) !== String(childId);
      });
      findedSubGoal.children = modifiedChild;
      user
        .save()
        .then((result) => {
          return res.json({
            status: 200,
            message: "Goal deleted successfully",
            goals: result.goals,
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

//Mark the goal either completed or not completed
router.put("/:goalId/:subGoalId/:childId/mark", (req, res, next) => {
  const { userId, goalId, subGoalId, childId } = req.body;
  User.findById(userId)
    .then((user) => {
      let findedGoal = user.goals.find((el) => {
        return String(el._id) === String(goalId);
      });
      let findedSubGoal = findedGoal.userGoals.find((el) => {
        return String(el._id) === String(subGoalId);
      });
      let modifiedChild = findedSubGoal.children.find((el) => {
        return String(el._id) === String(childId);
      });
      modifiedChild.checked = !modifiedChild.checked;
      user
        .save()
        .then((result) => {
          return res.json({
            status: 200,
            message: "Goal checked successfully",
            goals: result.goals,
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

module.exports = router;
