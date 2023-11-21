import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                src="images/Logo.png"
                alt="logo"
                style={{ height: "50px", width: "100px" }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
