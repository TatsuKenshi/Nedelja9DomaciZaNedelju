import axios from "axios";

export const getAllProducts = () =>
  axios.get(`https://hiawatha-comic-book-store-db.herokuapp.com/products`);
export const newProduct = (name, price, desc) =>
  axios.post(`https://hiawatha-comic-book-store-db.herokuapp.com/products`, {
    name,
    price,
    desc,
  });
