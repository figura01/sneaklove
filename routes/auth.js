const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const exposeFlashMessage = require("../middlewares/exposeFlashMessage");

const salt = 10;

<<<<<<< HEAD
router.post("auth/signin", async (req, res, next) => {

  console.log('sign in', req.body);
  const {
    email,
    password
  } = req.body;
=======
router.post("/signin", async (req, res, next) => {
  console.log("sign in", req.body);
  const { email, password } = req.body;
>>>>>>> cb6f1aa32231c4cf095af1341a099df60d3471cf
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
      res.redirect("/signin");
    }
  }
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.post("/signup", async (req, res, next) => {
  console.log('route post auth/signin');
  console.log('req.body: ', req.body);

  try {
    const newUser = req.body;
    console.log('newUser', newUser);

    const foundUser = await User.findOne({
      email: newUser.email
    });
    console.log('foudsUser: ', foundUser);
    if (foundUser) {
      console.log('user trouver');

      res.render("signup.hbs", {
        msg: "Email already taken"
      });

    } else {
      console.log('user pas trouver');
      const hashedPassword = bcrypt.hashSync(newUser.password, salt);
      newUser.password = hashedPassword;
      console.log('newUser before register: ', newUser);
      const user = await User.create(newUser);
      res.redirect("signin");
    }

  } catch (errDb) {
    console.log(errDb);
    next(errDb);
  }
  /*
  
  try {
    console.log('test de trouver un user')
    const newUser = req.body;
    console.log("newUser: ", newUser);
    const foundUser = await User.findOne({
      email: newUser.email,
    });
    console.log("foundUser: ", foundUser);
    if (foundUser) {
      console.log('user touver');
      //req.flash("error", "Invalid credentials");

      console.log('before redirect');
      res.render("auth/signup", {
        msg: "Email already taken"
      });

      res.render("/signup", {
        msg: "Email already taken",
      });
    } else {
      console.log('test de create user');
      const hashedPassword = bcrypt.hashSync(newUser.password, salt);
      newUser.password = hashedPassword;
      const user = await User.create(newUser);
      res.redirect("signin");
    }
    

  } catch (error) {
    next(error);
  }
  */
});

router.get("/logout", async (req, res, next) => {
  console.log(req.session.currentUser);
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});

module.exports = router;
