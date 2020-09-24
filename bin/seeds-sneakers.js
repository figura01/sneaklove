require("dotenv").config();
const Sneaker = require("../models/Sneaker");
const mongoose = require("mongoose");

const sneakers = [
  {
    name: "Sneaker 1 Men",
    ref: "SNHO1234",
    size: 42,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum urna eu arcu facilisis, non egestas odio sodales. Morbi ut dignissim arcu. Etiam magna lorem, ultricies eget orci ut, viverra convallis nibh",
    price: 200,
    category: "men",
    id_tags: 1,
  },

  {
    name: "Sneaker 2 Men",
    ref: "SNHO1235",
    size: 38,
    description:
      "Maecenas ante quam, ultricies at ex quis, varius rutrum mi. Vivamus nisi massa, lobortis semper purus a, fermentum consequat nunc. orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum urna eu arcu facilisis, non egestas odio sodales. Morbi ut dignissim arcu. Etiam magna lorem, ultricies eget orci ut, viverra convallis nibh",
    price: 120,
    category: "men",
    id_tags: 2,
  },

  {
    name: "Sneake 1 women",
    ref: "SNWO2345",
    size: 38,
    description:
      "Maecenas ante quam, ultricies at ex quis, varius rutrum mi. Vivamus nisi massa, lobortis semper purus a, fermentum consequat nunc. orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum urna eu arcu facilisis, non egestas odio sodales. Morbi ut dignissim arcu. Etiam magna lorem, ultricies eget orci ut, viverra convallis nibh",
    price: 150,
    category: "women",
    id_tags: 3,
  },
  {
    name: "Sneake 2 women",
    ref: "SNWO2346",
    size: 34,
    description:
      "Maecenas ante quam, ultricies at ex quis, varius rutrum mi. Vivamus nisi massa, lobortis semper purus a, fermentum consequat nunc. orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum urna eu arcu facilisis, non egestas odio sodales. Morbi ut dignissim arcu. Etiam magna lorem, ultricies eget orci ut, viverra convallis nibh",
    price: 80,
    category: "women",
    id_tags: 2,
  },

  {
    name: "Sneake 1 kid",
    ref: "SNKD12346",
    size: 18,
    description:
      "Maecenas ante quam, ultricies at ex quis, varius rutrum mi. Vivamus nisi massa, lobortis semper purus a, fermentum consequat nunc. orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum urna eu arcu facilisis, non egestas odio sodales. Morbi ut dignissim arcu. Etiam magna lorem, ultricies eget orci ut, viverra convallis nibh",
    price: 80,
    category: "women",
    id_tags: 2,
  },
  {
    name: "Sneake 2 kid",
    ref: "SNKD32346",
    size: 20,
    description:
      "Maecenas ante quam, ultricies at ex quis, varius rutrum mi. Vivamus nisi massa, lobortis semper purus a, fermentum consequat nunc. orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum urna eu arcu facilisis, non egestas odio sodales. Morbi ut dignissim arcu. Etiam magna lorem, ultricies eget orci ut, viverra convallis nibh",
    price: 90,
    category: "women",
    id_tags: 2,
  },
];

mongoose
  .connect("mongodb://localhost:27017/Sneakers-database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Sneaker.create(sneakers)
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
