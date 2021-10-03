import Product from "./Product";
import StyledProductList from "../styles/StyledProductList"

const ProductList = ({
  productList,
  total,
  setTotal,
  tax,
  setTax
}) => {
  return (
    <StyledProductList>
      <h2>Katalog</h2>
      <hr />
      
      {productList.map((product) => (
        <Product
          key={product.id}
          product={product}
          total={total}
          setTotal={setTotal}
          tax={tax}
          setTax={setTax}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
