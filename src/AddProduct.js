import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ProductContext from "./ProductContext";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const { addProduct } = useContext(ProductContext);
  let navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    size: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  function handleChange(event) {
    setNewProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addProduct(newProduct).then((product) =>
      navigate(`/products/${product.id}`)
    );
  }
  let { name, size, description, price, imageUrl } = newProduct;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Size</Form.Label>
        <Form.Control
          type="text"
          name="size"
          value={size}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image Url</Form.Label>
        <Form.Control
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit">Save</Button>
    </Form>
  );
}

export default AddProduct;
