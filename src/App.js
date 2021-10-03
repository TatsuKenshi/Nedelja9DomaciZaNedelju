import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Total from "./components/Total";
import { getAllProducts } from "./Service";
import "./styles/App.css"

function App() {
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProductList(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <ProductForm
        productList={productList}
        setProductList={setProductList}
      ></ProductForm>

      <ProductList
        productList={productList}
        setProductList={setProductList}
        total={total}
        setTotal={setTotal}
        tax={tax}
        setTax={setTax}
      ></ProductList>
      
      <Total
        productList={productList}
        setProductList={setProductList}
        total={total}
        setTotal={setTotal}
        tax={tax}
        setTax={setTax}
      ></Total>
    </div>
  );
}

export default App;
