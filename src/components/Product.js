import { useState } from "react";
import StyledProduct from "../styles/StyledProduct";

const Product = ({ product, total, setTotal, tax, setTax }) => {
  const [quantity, setQuantity] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <StyledProduct>
      <p>
        {product.name} ${product.price}
      </p>

      <p>Quantity: {quantity}</p>

      <button
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        Show Info
      </button>

      <p>{showInfo === true ? product.desc : ""}</p>
      <br />

      <button
        disabled={quantity === 0 ? true : false}
        onClick={() => {
          setQuantity(quantity - 1);
          setTotal(total - Number(product.price));
          setTax(tax - 0.15 * Number(product.price));
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          setQuantity(quantity + 1);
          setTotal(total + Number(product.price));
          setTax(tax + 0.15 * Number(product.price));
        }}
      >
        +
      </button>
    </StyledProduct>
  );
};

export default Product;
