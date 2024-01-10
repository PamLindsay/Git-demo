import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();
export const ProductProvider = (props) => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await getProducts();
    }
    fetchData();
  }, []);

  function getProducts() {
    return axios.get("http://localhost:3004/products/").then((response) => {
      setProducts(response.data);
    });
  }
  function getProduct(id) {
    return axios
      .get(`http://localhost:3004/products/${id}`)
      .then((response) => new Promise((resolve) => resolve(response.data)));
  }

  function updateProduct(product) {
    return axios
      .put(`http://localhost:3004/products/${product.id}`, product)
      .then((response) => {
        getProducts();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function addProduct(product) {
    return axios
      .post("http://localhost:3004/products/", product)
      .then((response) => {
        getProducts();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function deleteProduct(id) {
    axios.delete(`http://localhost:3004/products/${id}`).then(getProducts);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        getProduct,
        updateProduct,
        addProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
