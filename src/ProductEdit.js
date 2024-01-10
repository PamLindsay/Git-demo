import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "./ProductContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProductEdit() {
  const { id } = useParams();
  const { updateProduct, getProduct } = useContext(ProductContext);
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    size: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(id);
        setEditedProduct(productData);
      } catch (error) {
        console.error("Error fetching product for edit:", error);
      }
    };

    fetchProduct();
  }, [id, getProduct]);

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      updateProduct({
        id,
        ...editedProduct,
      });

      window.location.href = "/products";
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>
          <strong>Product Name:</strong>
        </Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={editedProduct.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          <strong>Description:</strong>
        </Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={editedProduct.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          <strong>Size:</strong>
        </Form.Label>
        <Form.Control
          type="text"
          name="size"
          value={editedProduct.size}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          <strong>Price:</strong>
        </Form.Label>
        <Form.Control
          type="text"
          name="price"
          value={editedProduct.price}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  );
}

export default ProductEdit;
