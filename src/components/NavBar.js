import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand className={styles.logo} href="#home">ConnectBcn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link>
              <i className="fa-solid fa-house"></i>Home
            </Nav.Link>
            <Nav.Link>
              <i className="fa-solid fa-right-to-bracket"></i>Sign In
            </Nav.Link>
            <Nav.Link>
              <i className="fa-solid fa-user-plus"></i>Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
