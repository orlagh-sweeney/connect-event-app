import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
        <Navbar.Brand className={styles.Brand} href="#home">ConnectBcn</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact to="/" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fa-solid fa-house"></i>Home
            </NavLink>
            <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fa-solid fa-right-to-bracket"></i>Sign In
            </NavLink>
            <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}>
              <i className="fa-solid fa-user-plus"></i>Sign Up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
