const express = require("express");
const router = express.Router();
const Sneaker = require("../models/Sneaker");
const Tag = require("../models/Tag");

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

router.get("/products_add", async (req, res, next) => {
  try {
    const tag = await Tags.find();
    res.render("products_add", {
      tag
    });
  } catch (error) {
    next(error);
    return error;
  }
});

router.post("/tags_add", async (req, res, next) => {
  console.log("taggggg");
  try {
    const newTag = req.body;
    console.log("TAG CREATION");
    console.log(newTag);
    const createdTag = await Tags.create(newTag);
    res.redirect("/products_add");
  } catch (error) {
    next(error);
  }
});

router.post("/products_add", async (req, res, next) => {
  try {
    const newSneakers = req.body;
    console.log("SNEAKERS CREATION");
    console.log(newSneakers);
    const createdSneakers = await Sneaker.create(newSneakers);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/product-edit/:id", async (req, res, next) => {
  console.log('product edit GET');

  console.log(req.params.id);
  const sneaker = await Sneaker.findById(req.params.id);
  const tags = await Tag.find({});
  console.log(tags);

  tagsAndShose = {
    tags: tags,
    tagShoes: sneaker.id
  };

  console.log(sneaker);
  res.render("product_edit", {
    sneaker,
    tagsAndShose
  });
});


router.get("/products_manage", async (req, res, next) => {

  const sneakers = await Sneaker.find({});
  const tags = await Tag.find({});

  res.render("products_manage", {
    sneakers,
    tags,
  });
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
  res.render("one_product");
});

module.exports = router;