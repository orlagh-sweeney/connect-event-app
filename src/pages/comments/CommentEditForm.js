import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { axiosRes } from "../../api/axiosDefaults";
import { NotificationManager } from "react-notifications";

function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments } = props;

  const [formContent, setFormContent] = useState(content);

  const handleChange = (e) => {
    setFormContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      NotificationManager.success(
        "Success!",
        "Your comment has been updated",
        3000
      );
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
      NotificationManager.error(
        "Error!",
        "An error has occured. Your comment has not been updated.",
        3000
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="px-4 mt-2">
      <Form.Group>
        <Form.Control
          className={styles.FormEdit}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>

      <div className="text-right">
        <Button
          className={`${btnStyles.Button} ${btnStyles.Light}`}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </Button>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Light}`}
          disabled={!content.trim()}
          type="submit"
        >
          update
        </Button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
