const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//Goal Model
const Goal = require("../../models/goals");

router.post("/", auth, (req, res, next) => {
  const { goalName, children } = req.body;
  const newGoal = new Goal({
    goalName,
    children,
  });
  newGoal
    .save()
    .then((goal) => {
      return res.json({
        status: 201,
        message: "You saved a goal",
        goalName: goal.goalName,
        children: goal.children,
      });
    })
    .catch((err) => {
      return res.json({ error: err });
    });
});

module.exports = router;
