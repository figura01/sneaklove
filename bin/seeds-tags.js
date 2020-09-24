require("dotenv").config();
const Tag = require("../models/Tag");
const mongoose = require("mongoose");

const tags = [
  {
    label: "Street",
  },
  {
    label: "Sports",
  },
  {
    label: "Urban",
  },
];

mongoose
  .connect("mongodb://localhost:27017/Sneakers-database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Tag.create(tags)
      .then((dbResult) => {
        console.log(dbResult);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
