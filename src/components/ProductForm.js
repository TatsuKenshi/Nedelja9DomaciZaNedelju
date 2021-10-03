import { useState } from "react";
import { newProduct } from "../Service";
import StyledProductForm from "../styles/StyledProductForm";

const ProductForm = ({ setProductList }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [errorMsg, setErrorMsg] = useState("")

  return (
    <StyledProductForm>
      <h2>Novi Proizvod</h2>
      <hr />

      <label htmlFor="name">ime:</label>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />

      <label htmlFor="price">cena:</label>
      <br />
      <input
        type="number"
        name="price"
        id="price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br />

      <label htmlFor="desc">info:</label>
      <br />
      <input
        type="text"
        name="desc"
        id="desc"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <br />
      <br />

      <button
        onClick={() => {
          if (name !== "" && price > 0 && desc !== "") {
            setErrorMsg("")
            newProduct(name, price, desc).then((res) => {
              setProductList((prev) => [...prev, res.data]);
            });
          } else {
            setErrorMsg("Neispravan unos. Ime i info ne smeju biti prazna polja, a cena mora biti veca od nule.")
          }
        }}
      >
        Napravi Proizvod
      </button>
      <br />
      <br />
      <p>{errorMsg}</p>
    </StyledProductForm>
  );
};

export default ProductForm;
