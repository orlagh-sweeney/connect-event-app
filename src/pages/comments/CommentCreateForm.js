import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { axiosRes } from "../../api/axiosDefaults";
import { InputGroup } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { NotificationManager } from "react-notifications";

function CommentCreateForm(props) {
  const { event, setEvent, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        event,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setEvent((prevEvent) => ({
        results: [
          {
            ...prevEvent.results[0],
            comments_count: prevEvent.results[0].comments_count + 1,
          },
        ],
      }));
      NotificationManager.success(
        "Success!",
        "Your comment has been posted",
        3000
      );
      setContent("");
    } catch (err) {
      console.log(err);
      NotificationManager.error(
        "Error!",
        "An error has occured. Your comment has not been posted",
        3000
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="px-4">
      <h2 className={styles.Header}>Comments:</h2>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="leave a comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Light} d-block ml-auto`}
        type="submit"
      >
        post
      </Button>
    </Form>
  );
}

export default CommentCreateForm;
