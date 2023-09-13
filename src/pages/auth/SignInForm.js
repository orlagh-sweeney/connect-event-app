import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";

import axios from "axios";

const SignInForm = () => {
    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
      });
      const { username, password } = signInData;
    
      const [errors, setErrors] = useState({});
    
      const history = useHistory();
    
      const handleChange = (event) => {
        setSignInData({
          ...signInData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("/dj-rest-auth/login/", signInData);
          history.push("/");
        } catch (err) {
          setErrors(err.response?.data);
        }
      };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={{ span: 6, offset: 2 }}>
        <Container className="p-4">
          <h1 className={styles.Header}>sign in</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
              className={styles.Input}
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">password</Form.Label>
              <Form.Control
              className={styles.Input}
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Light}`} type="submit">
              Sign in
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        
        <Container className="mt-3">
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign up here!</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignInForm;
