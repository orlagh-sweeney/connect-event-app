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
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

// style imports
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/UsernameForm.module.css";
import { NotificationManager } from "react-notifications";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      // redirect user if they are not the owner of this profile
      history.push("/");
    }
  }, [currentUser, history, id]);

  // submit new username to api 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      history.goBack();
      NotificationManager.success(
        "Success!",
        "Your username has been updated",
        3000
      );
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
      NotificationManager.error(
        "Error!",
        "An error has occured. Your username has not been updated",
        3000
      );
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="mx-auto py-2 p-md-2" md={{ span: 6, offset: 2 }}>
        <Container className="p-4">
        <h1 className={styles.Header}>Change username</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>New username</Form.Label>
              <Form.Control
                placeholder="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
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
              className={`${btnStyles.Button} ${btnStyles.Light}`}
              type="submit"
            >
              save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UsernameForm;