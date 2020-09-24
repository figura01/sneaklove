require("dotenv").config();
const User = require("../models/User");
const mongoose = require("mongoose");

const users = [
  {
    name: "Remy",
    lastname: "LaFourmi",
    email: "RemyLF@gmail.mail",
  },
  {
    name: "Celine",
    lastname: "Gonzales",
    email: "CelineG@gmail.mail",
  },
  {
    name: "Erwann",
    lastname: "LePaon",
    email: "ErwannL@gmail.mail",
  },
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    User.create(users)
      .then((dbResult) => {
        console.log(process.env.MONGO_URI);
        console.log(dbResult);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
