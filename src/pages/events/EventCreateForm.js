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
import { Image } from "react-bootstrap";

function EventCreateForm() {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    content: "",
    image: "",
  });
  const { title, date, time, location, content, image } = eventData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setEventData({
        ...eventData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  return (
    <Form>
      <Row>
        <Col md={{ span: 8, offset: 1 }}>
          <Container className="p-4">
            <h2 className={styles.Header}>Hi, let's build your event</h2>

            <Form.Group>
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="event name"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={date}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={time}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="location"
                placeholder="location"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="description"
                name="content"
                value={content}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Dark} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset src={Upload} message="Click to upload an image" />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                className="d-none"
              />
            </Form.Group>

            <Button
              className={`${btnStyles.Button} ${btnStyles.Light}`}
              onClick={() => {}}
            >
              cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Light}`}
              type="submit"
            >
              create
            </Button>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventCreateForm;
