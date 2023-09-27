// react imports
import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";

// api imports
import { axiosReq } from "../../api/axiosDefaults";

// react bootstrap imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { Image } from "react-bootstrap";

// style imports
import styles from "../../styles/EventCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

// component imports
import { categories } from "../../utils/categories";
import { NotificationManager } from "react-notifications";

function EventEditForm() {
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

  // destructure id from url to load event data
  const { id } = useParams();

  // get data about the event the user wants to edits
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/events/${id}/`);
        const { title, date, time, location, content, type, image, is_owner } =
          data;
        // only the event owner can access the edit page, otherwise redirect user back to homepage
        is_owner
          ? setEventData({ title, date, time, location, content, type, image })
          : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };
    // dependencies
    handleMount();
  }, [history, id]);

  // re-format date to display in the edit form
  const dayjs = require("dayjs");
  dayjs().format();
  const formattedDate = dayjs(date).format("YYYY-MM-DD");

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
  // redirect users to the updated event page
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("date", formattedDate);
    formData.append("time", time);
    formData.append("location", location);
    formData.append("type", type);
    formData.append("content", content);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/events/${id}`, formData);
      history.push(`/events/${id}`);
      NotificationManager.success(
        "Success!",
        "Your event has been updated",
        3000
      );
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
      NotificationManager.error(
        "Error!",
        "An error has occured. Your event could not be updated",
        3000
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={{ span: 8, offset: 1 }}>
          <Container className="p-4">
            <h2 className={styles.Header}>Hi, let&apos;s edit your event</h2>

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
                value={formattedDate}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.formattedDate?.map((message, idx) => (
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
              >
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
              update
            </Button>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventEditForm;
