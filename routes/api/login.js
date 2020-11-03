const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/user");

router.post("/", (req, res, next) => {
  const { email, password } = req.body;

  //Simple validation
  if (!email || !password) {
    return res.status(400).json({ message: "Please Enter all Fields" }); // 400 - bad request
  }

  //Check for existing user
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.status(400).json({ message: "User does not exists" });
    }

    //Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }

      const jwtSecretKey =
        process.env.JwtSecretKey || config.get("JwtSecretKey");
      jwt.sign(
        { id: user._id },
        jwtSecretKey,
        { expiresIn: "2h" },
        (err, token) => {
          if (err) {
            throw new Error(err);
          }
          res.json({
            status: 200,
            message: "Logged in Successfully",
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              goals: "",
            },
          });
        }
      );
    });
  });
});

module.exports = router;
