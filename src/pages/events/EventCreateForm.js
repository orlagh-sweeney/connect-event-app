import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/EventCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function EventCreateForm() {
  const [errors, setErrors] = useState({});

  return (
    <Form>
      <Row>
        <Col md={{ span: 8, offset: 1 }}>
          <h2 className={styles.Header}>Hi, let's build your event</h2>
          <Container className="p-4">
            <Form.Group controlId="title">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="event name"
                name="title"
              />
            </Form.Group>

            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control className={styles.Input} type="date" name="date" />
            </Form.Group>

            <Form.Group controlId="time">
              <Form.Label>Time</Form.Label>
              <Form.Control className={styles.Input} type="time" name="time" />
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                className={styles.Input}
                type="location"
                placeholder="location"
                name="location"
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                className={styles.Input}
                as="textarea"
                rows={8}
                placeholder="description"
                name="content"
              />
            </Form.Group>

            <Form.Group className="text-center">
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Click to upload an image" />
              </Form.Label>
            </Form.Group>

            <Button
              className={`${btnStyles.Button} ${btnStyles.Light}`}
              onClick={() => {}}
            >
              create
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Light}`}
              type="submit"
            >
              cancel
            </Button>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventCreateForm;
