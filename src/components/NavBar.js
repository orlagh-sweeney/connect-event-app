import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import btnStyles from "../styles/Button.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const createEventButton = (
    <>
      <NavLink
        to="/events/create"
        className={`${btnStyles.NavButton} ${btnStyles.Dark} text-left`}
        activeClassName={styles.Active}
      >
        Create event +
      </NavLink>
    </>
  );
  const loggedInIcons = (
    <>
      <NavLink
        to={`/profiles/&{currentUser?.profile_id}`}
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <Avatar src={currentUser?.profile_image} height={40} /><span>Profile</span>
      </NavLink>
      <NavLink to="/" className={styles.NavLink} onClick={handleSignOut}>
        <i className="fa-solid fa-sign-out-alt"></i>Sign out
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        to="/signin"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-right-to-bracket"></i>Sign In
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-user-plus"></i>Sign Up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.Brand} href="#home">
            ConnectBcn
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            {currentUser && createEventButton}
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-house"></i><span>Home</span>
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
