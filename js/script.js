"use strict";
import { cardProduct } from "../component/cardProduct.js";
import { getData } from "../store/fectchApi.js";
import { userCard } from "../component/userCard.js";

const renderArea = document.querySelector("#render-area");
const cardProducts = await getData("products");

const userLists = document.querySelector("#userList");
const users = await getData("users");

cardProducts.map((product) => {
  renderArea.innerHTML += cardProduct(product);
});

users.map((user) => {
  userLists.innerHTML += userCard(user);
});