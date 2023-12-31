// react imports 
import React, { useState } from "react";
import { Link } from "react-router-dom";

// api imports
import { axiosRes } from "../../api/axiosDefaults";

// style imports 
import styles from "../../styles/Comment.module.css";

// react boostrap imports 
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// component imports
import Avatar from "../../components/Avatar";
import { DropdownMenu } from "../../components/DropdownMenu";
import CommentEditForm from "./CommentEditForm";

// context imports
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// react notifications imports
import { NotificationManager } from "react-notifications";

const Comment = (props) => {
  // destructure props
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setEvent,
    setComments,
    like_id,
    likes_count,
  } = props;
  const [showEditForm, setShowEditForm] = useState(false);

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

      // remove deleted comment from state
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
      NotificationManager.success(
        "Success!",
        "Your comment has been deleted",
        3000
      );
    } catch (err) {
      NotificationManager.error(
        "Error!",
        "An error has occured. Your comment has not been deleted",
        3000
      );
    }
  };

  // allows users to like a comment
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { comment: id });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                likes_count: comment.likes_count + 1,
                like_id: data.id,
              }
            : comment;
        }),
      }));
    } catch (err) {
    //   console.log(err);
    }
  };

  // allows users to unlike a comment
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                likes_count: comment.likes_count - 1,
                like_id: null,
              }
            : comment;
        }),
      }));
    } catch (err) {
    //   console.log(err);
    }
  };

  return (
    <div className="px-2">
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-1">
          <span className={styles.Owner}>{owner}</span>
          <br />
          <span className={styles.Date}>{updated_at}</span>
        </Media.Body>
        <Media.Body className="text-right">
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can&apos;t like your own comment!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like comments!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
        </Media.Body>
        {is_owner && !showEditForm && (
          <DropdownMenu
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
            item="comment"
          />
        )}
      </Media>
      <Media.Body>
        {showEditForm ? (
          <CommentEditForm
            id={id}
            profile_id={profile_id}
            content={content}
            profileImage={profile_image}
            setComments={setComments}
            setShowEditForm={setShowEditForm}
          />
        ) : (
          <p className={styles.Content}>{content}</p>
        )}
      </Media.Body>
    </div>
  );
};

export default Comment;
