const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const validator = require("email-validator");
const auth = require("../../middleware/auth");

//User model
const User = require("../../models/user");

// Goal model
const Goal = require("../../models/goals");

router.post("/", (req, res, next) => {
  const { name, email, password } = req.body;

  const checkEmailValidation = validator.validate(email);

  //Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please Enter all Fields" }); // 400 - bad request
  }
  //Check for valid email
  if (checkEmailValidation === false) {
    return res
      .status(400)
      .json({ message: "Entered Email is not in the valid format" });
  } else {
    //Check for existing user
    User.findOne({ email: email }).then((user) => {
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      const newUser = new User({
        name,
        email,
        password,
      });

      //Creating salt and hash

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw new Error(err);
          }

          newUser.password = hash;

          newUser.save().then((user) => {
            jwt.sign(
              { id: user.id },
              config.get("JwtSecretKey"),
              { expiresIn: "2h" },
              (err, token) => {
                if (err) {
                  throw new Error(err);
                }
                res.status(201).json({
                  status: 201,
                  message: "User created Successfully",
                  token,
                  user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    goals: user.goals,
                  },
                });
              }
            );
          });
        });
      });
    });
  }
});

// Get user data

router.get("/user", auth, (req, res, next) => {
  User.findById(req.user.id)
    .select("-password -createdDate -__v")
    .then((user) => {
      return res.json({
        status: 200,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          goals: user.goals,
          notes: user.notes,
        },
      });
    })
    .catch((err) => {
      return res.json(err);
    });
});

module.exports = router;
