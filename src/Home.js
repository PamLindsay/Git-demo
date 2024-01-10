import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav, Container, Stack, Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#bb9457" }} expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              src={require("./shoe-images/93781.jpg")}
              alt=""
              width="150"
              height="120"
            />
          </Navbar.Brand>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="about" className="nav-link">
                About Us
              </Link>
              <Link to="products" className="nav-link">
                Products
              </Link>

              <Link to="add" className="nav-link">
                <Button variant="secondary">Add New Product</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Stack gap={3} className="col-md-10 mx-auto">
        <Outlet />
      </Stack>
    </>
  );
}

export default Home;
