// react imports
import React from "react";
import { Link } from "react-router-dom";

// bootstrap component imports
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// style imports
import styles from "../styles/About.module.css";
import btnStyles from "../styles/Button.module.css";

function AboutPage() {
  return (
    <div className="mb-4">
      <div className={styles.HeroImage}>
        <div className={styles.HeroText}>
          <h1>
            <strong>Connecting You With Barcelona</strong>
          </h1>
        </div>
      </div>

      <Container>
        <Row>
          <Col className="text-center mt-4">
            <h2 className={`${styles.Header} text-center mt-4 pb-2`}>Who are we?</h2>
            <p>
              Connect Bcn is Barcelona&apos;s go-to platform to find out what&apos;s going
              in this bustling city. Whether you want to experience Barcelona&apos;s
              rich culture or find some fellow cylists to explore this outskirts
              of the city, Connect Bcn is here to help.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
        <Col className="text-center mt-4">
        <h2 className={`${styles.Header} text-center mt-4 pb-2`}>How does it work?</h2>
            <p>
              We keep things simple. First things first, create an account. Follow the sign up form link below to create a profile.
              Once logged in you can build your own event or use our search function to find events you would like to attend.<br /> It&apos;s that easy!
            </p>
            </Col>
        </Row>
      </Container>

      <Container>
        <h2 className={`${styles.Header} text-center mt-4`}>Ready to get started?</h2>
        <Row>
          <Col className="text-center mt-4">
            <Link to={`/signup/`} className={`${btnStyles.Button} ${btnStyles.Light}`}>Sign Up
              </Link>
          </Col>
          <Col className="text-center mt-4">
            <Link to={`/`} className={`${btnStyles.Button} ${btnStyles.Light}`}>Discover Events
              </Link>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default AboutPage;
