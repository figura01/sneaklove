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
  res.render("products.hbs", {
    sneakers,
    category: req.params.cat,
  });
});

router.get("/products_add", (req, res) => {
  res.render("products_add");
});

router.get("/products_manage", (req, res) => {
  res.render("products_manage");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
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
