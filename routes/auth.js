const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const exposeFlashMessage = require("../middlewares/exposeFlashMessage");

const salt = 10;

router.post("/signin", async (req, res, next) => {
  console.log("sign in", req.body);
  const { email, password } = req.body;
  const foundUser = await User.findOne({
    email: email,
  });
  console.log(foundUser);

  if (!foundUser) {
    req.flash("warning", "Invalid credentials");
    res.redirect("/signin");
  } else {
    const isSamePassword = bcrypt.compareSync(password, foundUser.password);
    if (!isSamePassword) {
      req.flash("error", "Invalid Credentials");
      res.redirect("signin");
    } else {
      const userDocument = {
        ...foundUser,
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
  console.log("je suis la");
  console.log("sign UP", req.body);
  try {
    const newUser = req.body;
    console.log("newUser: ", newUser);
    const foundUser = await User.findOne({
      email: newUser.email,
    });
    console.log("foundUser: ", foundUser);
    if (foundUser) {
      console.log("user touver");

      res.render("/signup", {
        msg: "Email already taken",
      });
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, salt);
      newUser.password = hashedPassword;
      const user = await User.create(newUser);
      res.redirect("/signin");
    }
  } catch (error) {
    next(error);
  }
});

router.get("/logout", async (req, res, next) => {
  console.log(req.session.currentUser);
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});

module.exports = router;
