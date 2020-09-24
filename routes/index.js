const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/home", (req, res) => {
  res.render("index");
});

router.get("/sneakers/:cat", (req, res) => {
  res.render("products_manage.hbs");
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