// react imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// api imports
import { axiosRes } from "../../api/axiosDefaults";

// style imports
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

// bootstrap imports
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";

// components imports
import Avatar from "../../components/Avatar";

// notifications import
import { NotificationManager } from "react-notifications";

function CommentCreateForm(props) {
  // destructure props
  const { event, setEvent, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  // handle change in content
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  // submit comment data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        event,
      });
      // update comments
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      // update event with new comments count
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
