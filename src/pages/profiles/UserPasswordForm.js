// react imports
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";

// api imports
import { axiosRes } from "../../api/axiosDefaults";

// bootstrap component imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

// context imports
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// style imports
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/UserPasswordForm.module.css";

// notificaition imports
import { NotificationManager } from "react-notifications";

const UserPasswordForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;

  const [errors, setErrors] = useState({});

  // handle changes in the input fields
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      // redirect user if they are not the owner of this profile
      history.push("/");
    }
  }, [currentUser, history, id]);

  // submit new password to api
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      history.goBack();
      NotificationManager.success(
        "Success!",
        "Your password has been updated",
        3000
      );
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
      NotificationManager.error(
        "Error!",
        "An error has occured. Your password has not been updated",
        3000
      );
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="mx-auto py-2 p-md-2" md={{ span: 6, offset: 2 }}>
        <Container className="p-4">
          <h1 className={styles.Header}>Change password</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>New password</Form.Label>
              <Form.Control
                placeholder="new password"
                type="password"
                value={new_password1}
                onChange={handleChange}
                name="new_password1"
              />
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                placeholder="confirm new password"
                type="password"
                value={new_password2}
                onChange={handleChange}
                name="new_password2"
              />
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Light}`}
              onClick={() => history.goBack()}
            >
              cancel
            </Button>
            <Button
              type="submit"
              className={`${btnStyles.Button} ${btnStyles.Light}`}
            >
              save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UserPasswordForm;
