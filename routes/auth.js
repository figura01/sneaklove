const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = 10;

router.get("/signin", async (req, res, next) => {
  res.render("signin.hbs");
});

router.post("auth/signin", async (req, res, next) => {
  console.log('sign in', req.body);
  const {
    email,
    password
  } = req.body;
  const foundUser = await User.findOne({
    email: email
  });
  console.log(foundUser);

  if (!foundUser) {
    req.flash("error", "Invalid credentials");
    res.redirect("signin.hbs");
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (!isSamePassword) {
      req.flash("error", "Invalid Credentials");
      res.redirect("signin.hbs");
    } else {
      const userDocument = {
        ...foundUser
      };
      console.log(userDocument);
      const userObject = foundUser.toObject();
      delete userObject.password;
      req.session.currentUser = userObject;
      req.flash("success", "Success logged in");
      res.redirect("/");
    }
  }
});

router.post("/signup", async (req, res, next) => {
  console.log('sign UP', req.body);
  try {
    const newUser = req.body;
    console.log('newUser: ', newUser);
    const foundUser = await User.findOne({
      email: newUser.email
    });
    console.log('foundUser: ', foundUser);
    if (foundUser) {
      console.log('user touver');
      
      res.render("/auth/signup", {
        msg: "Email already taken"
      });

    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, salt);
      newUser.password = hashedPassword;
      const user = await User.create(newUser);
      res.redirect("auth/signin");
    }
  } catch (error) {
    next(error);
  }
});

// router.get("/logout", async (req, res, next) => {
//   console.log(req.session.currentUser);
//   req.session.destroy(function (err) {
//     // cannot access session here
//     // console.log(req.session.currentUser);
//     res.redirect("signin.hbs");
//   });
// });

module.exports = router;