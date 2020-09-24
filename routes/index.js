const express = require("express");
const router = express.Router();
const Sneaker = require("../models/Sneaker");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/home", (req, res) => {
  res.render("index");
});

router.get("/sneakers/:cat", async (req, res) => {
<<<<<<< HEAD
  console.log("paramas", req.params.cat);
  const parmaCategorie = req.params.cat;
  var sneakers;
  if (parmaCategorie === "collection") {
    sneakers = await Sneaker.find({});
  } else {
    sneakers = await Sneaker.find({
      category: `${parmaCategorie}`,
    });
  }
  console.log(sneakers);
  res.render("products.hbs", { sneakers, category: req.params.cat });
=======
  console.log('paramas', req.params.cat);

  const parmaCategorie = req.params.cat;
  var sneakers;
  if (parmaCategorie === 'collection') {
    sneakers = await Sneaker.find({});
  } else {
    sneakers = await Sneaker.find({
      category: `${parmaCategorie}`
    });
  }

  console.log(sneakers);
  res.render("products.hbs", {sneakers, category: req.params.cat});
>>>>>>> 76aee6b38f7323f4c081abf2c18308c12e3c53b6
});

router.get("/signin", (req, res) => {
  res.render("signin.hbs");
});

router.get("/signup", (req, res) => {
  res.render("signup.hbs");
});

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});

module.exports = router;
