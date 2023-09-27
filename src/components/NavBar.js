// react imports
import React from "react";
import { NavLink } from "react-router-dom";

// api imports
import axios from "axios";

// react bootstrap imports
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// style imports
import styles from "../styles/NavBar.module.css";
import btnStyles from "../styles/Button.module.css";

// context imports
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";

// component imports
import Avatar from "./Avatar";
import { removeTokenTimestamp } from "../utils/utils";

// hook imports
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  // get current user
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  // handle sign out
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
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
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <Avatar src={currentUser?.profile_image} height={40} />
        <span>Profile</span>
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
        <i className="fa-solid fa-right-to-bracket"></i>
        <span>Sign In</span>
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-user-plus"></i>
        <span>Sign Up</span>
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand className={styles.Brand}>ConnectBcn</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            {currentUser && createEventButton}
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </NavLink>
            <NavLink
              exact
              to="/about"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-circle-info"></i>
              <span>About</span>
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
