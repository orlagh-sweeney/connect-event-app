// react imports
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";

// api imports
import { axiosReq } from "../../api/axiosDefaults";

// style imports 
import styles from "../../styles/EventCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

// react bootstrap imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Image } from "react-bootstrap";

// component imports 
import Upload from "../../assets/upload.png";
import { categories } from "../../utils/categories";
import Asset from "../../components/Asset";

// hook imports 
import { useRedirect } from "../../hooks/useRedirect";
import { NotificationManager } from "react-notifications";

function EventCreateForm() {
  // redirect logged out users back to the homepage
  useRedirect('loggedOut');
  // store form values and destructure useState hook
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    content: "",
    type: "",
    image: "",
  });

  // destructure eventData 
  const { title, date, time, location, content, type, image } = eventData;

  const imageInput = useRef(null);

  const history = useHistory();

  const [errors, setErrors] = useState({});

  // handle changes in input fields
  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };
    
  // handle change in image field
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setEventData({
        ...eventData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // submit form data to api 
  // redirect users to newly created event page
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("location", location);
    formData.append("type", type);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/events/", formData);
      history.push(`/events/${data.id}`);
      NotificationManager.success(
        "Success!",
        "Your event has been created",
        3000
      );
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
      NotificationManager.error(
        "Error!",
        "An error has occured. Your event could not be created",
        3000
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={{ span: 8, offset: 1 }}>
          <Container className="p-4">
            <h2 className={styles.Header}>Hi, let&apos;s build your event</h2>

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
            {errors?.title?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={date}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.date?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={time}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.time?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

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
            {errors?.location?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

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
            {errors?.content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={type}
                onChange={handleChange}
                custom
              >
                <option value="none" className="d-none">select a category</option>
                {categories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {category.value}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            {errors?.type?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

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
                  <Asset width="200" src={Upload} message="Click to upload an image" />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
                className="d-none"
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
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
              create
            </Button>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventCreateForm;
