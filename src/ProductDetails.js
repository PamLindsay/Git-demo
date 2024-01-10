import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "./ProductContext";
import Card from "react-bootstrap/Card";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const { getProduct } = useContext(ProductContext);
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get("http://localhost:3004/products");
    getProduct(id)
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id, getProduct]);

  if (!product) return <p>Loading...</p>;
  return (
    <>
      <Card className="mb-3">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>Description:</strong> <span>{product.description}</span>
        </Card.Text>
        <Card.Text>
          <strong>Size:</strong> <span>{product.size}</span>
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> <span>${product.price}</span>
        </Card.Text>
      </Card>
    </>
  );
}

export default ProductDetails;
