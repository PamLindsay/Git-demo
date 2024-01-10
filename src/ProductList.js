import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import styles from "./ProductList.module.css";
import ProductContext from "./ProductContext";

function ProductList() {
  const { deleteProduct } = useContext(ProductContext);

  function handleDeleteProduct(id) {
    try {
      deleteProduct(id);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  function allProducts(products) {
    if (products === null) return;
    return (
      <div className={styles.card}>
        {products.map((product) => (
          <ListGroup.Item key={product.id} className={styles.list}>
            <img src={product.imageUrl} alt="" className={styles.cardImage} />

            <p>{product.name}</p>
            <p>${product.price}</p>

            <div className={styles.buttonContainer}>
              <Link to={`/products/${product.id}`} key={product.id}>
                <Button variant="secondary" className={styles.btn}>
                  View Details
                </Button>
              </Link>

              <Link to={`/products/edit/${product.id}`} key={product.id}>
                <Button variant="outline-info" className={styles.btn}>
                  Edit
                </Button>
              </Link>

              <Button
                variant="danger"
                onClick={() => handleDeleteProduct(product.id)}
                className={styles.btn}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </div>
    );
  }

  return (
    <>
      <h3>All Products</h3>

      <Card>
        <ProductContext.Consumer>
          {({ products }) => allProducts(products)}
        </ProductContext.Consumer>
      </Card>

      <Outlet />
    </>
  );
}

export default ProductList;
