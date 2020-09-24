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
});

router.get("/signup", (req, res) => {
  res.send("sneak");
});

router.get("/signin", (req, res) => {
  res.send("love");
});

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});

module.exports = router;