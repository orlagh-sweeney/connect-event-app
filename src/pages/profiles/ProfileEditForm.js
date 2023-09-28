// react imports
import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";

// api imports
import { axiosReq } from "../../api/axiosDefaults";

// bootstrap component imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

// style imports
import styles from "../../styles/ProfileEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

// context imports
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import { NotificationManager } from "react-notifications";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    image: "",
  });
  const { name, content, image } = profileData;

  const [errors, setErrors] = useState({});

  // get profile data from the API
  useEffect(() => {
    let isMounted = true;
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, content, image } = data;
          if (isMounted) {
            setProfileData({ name, content, image });
          }
        } catch (err) {
        //   console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
    return () => {
      isMounted = false;
    };
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  // submit updated data to the API
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
      NotificationManager.success(
        "Success!",
        "Your profile has been updated",
        3000
      );
    } catch (err) {
    //   console.log(err);
      setErrors(err.response?.data);
      NotificationManager.error(
        "Error!",
        "An error has occured. Your profile has not been updated",
        3000
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={{ span: 8, offset: 1 }}>
          <Container className="p-4">
            <h2 className={styles.Header}>Edit profile</h2>

            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                onChange={handleChange}
                name="content"
                rows={7}
              />
            </Form.Group>

            {errors?.content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group className="text-center">
              <p className="d-flex">Profile Photo</p>
              {image && (
                <figure>
                  <Image className={`${appStyles.Image}`} src={image} />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Dark} btn`}
                  htmlFor="image-upload"
                >
                  Edit photo
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                className="d-none"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>

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
};

export default ProfileEditForm;
