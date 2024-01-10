import React from "react";
import ProductList from "./ProductList";
import Home from "./Home";
import FeaturedProducts from "./FeaturedProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import ProductDetails from "./ProductDetails";
import ProductEdit from "./ProductEdit";
import AddProduct from "./AddProduct";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<ProductList />}>
            <Route path=":id" element={<ProductDetails />} />
            <Route path="edit/:id" element={<ProductEdit />} />
          </Route>
          <Route path="add" element={<AddProduct />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
