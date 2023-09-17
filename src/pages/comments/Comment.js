import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { DropdownMenu } from "../../components/DropdownMenu";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content, id, setEvent, setComments } = props;

  // get current user data
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  // delete a comment and update comments_count
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setEvent((prevEvent) => ({
        results: [
          {
            ...prevEvent.results[0],
            comments_count: prevEvent.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <div className="px-4">
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
        {is_owner && (
          <DropdownMenu handleEdit={() => {}} handleDelete={handleDelete} />
        )}
      </Media>
    </div>
  );
};

export default Comment;