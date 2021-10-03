import axios from "axios"

export const getAllProducts = () => axios.get(`http://localhost:3005/products`)
export const newProduct = ( name, price, desc ) => axios.post(`http://localhost:3005/products`, { name, price, desc })