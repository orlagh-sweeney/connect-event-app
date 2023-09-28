// react imports
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// style imports
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

// bootstrap imports
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// api imports
import axios from "axios";

// context and hook imports
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

// notifcation import
import { NotificationManager } from "react-notifications";

/*
Sign in logic from Code Institute Moments walkthrough project:
*/

const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();
  // redirect the user if they are already logged in 
  useRedirect("loggedIn");

  // store form values
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  // destructure sign in data
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  // handle change in input fields
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  // submit form data to api
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.goBack();
      NotificationManager.success(
        "Welcome back!",
        `Nice to see you ${username}`,
        3000
      );
    } catch (err) {
      setErrors(err.response?.data);
      NotificationManager.error(
        "Error!",
        "An error has occured. Please try log in again",
        3000
      );
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

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Light}`}
              type="submit"
            >
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
            Don&apos;t have an account? <span>Sign up here!</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignInForm;
