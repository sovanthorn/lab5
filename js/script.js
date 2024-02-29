'use strict'

import{ cardProduct } from "../component/cardProduct.js"
import { getData } from "../store/fectchApi.js";
import { userCard } from "../component/userCard.js";

const renderArea = document.querySelector("#render-area");
const cardProduct = await getData("products");

const userCards = document.querySelector("#User");
const cardProduct2 = await getData("user");

cardProduct1.map((product) => {
    renderArea.innerHTML += cardProduct(product);
  });
  
  cardProduct2.map((user) => {
    userCards.innerHTML += userCard(user);
  });
