import React from "react";
import styles from "../../styles/Event.module.css";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";

import { Link } from "react-router-dom";

const Event = (props) => {
  // destructure props
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    attending_count,
    attending_id,
    like_id,
    title,
    content,
    image,
    date,
    time,
    location,
    type,
    updated_at,
    eventPage,
  } = props;

  // get current user
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Event}>
      <Link to={`/events/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body className={styles.Body}>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span>
              {date}: {time} CEST
            </span>
          </div>
          <div className="d-flex align-items-center">
            <span>Attendees: {attending_count}</span>
          </div>
        </Media>
      </Card.Body>
      <Card.Body className={styles.Body}>
        <Media className="align-items-center justify-content-between">
          <div>
            {title && <Card.Title className="text-left">{title}</Card.Title>}
            {location && (
              <Card.Text className="text-left">{location}</Card.Text>
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Body className={styles.Body}>
        <Media className="align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Button className={`${btnStyles.Type}`}>
              {type}
            </Button>
          </div>
          <div>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip>You cannot de-register your own event.</Tooltip>
                }
              >
                <Button className={`${btnStyles.Button} ${btnStyles.Light}`}>
                  Attending
                </Button>
              </OverlayTrigger>
            ) : !currentUser ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Login to register for this event</Tooltip>}
              >
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Light}`}
                  onClick={() => {}}
                >
                  Not attending
                </Button>
              </OverlayTrigger>
            ) : !attending_id ? (
              <OverlayTrigger
                placeement="top"
                overlay={<Tooltip>Click to attend</Tooltip>}
              >
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Light}`}
                  onClick={() => {}}
                >
                  Not attending
                </Button>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placeement="top"
                overlay={<Tooltip>Click to unattend</Tooltip>}
              >
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Light}`}
                  onClick={() => {}}
                >
                  Attending
                </Button>
              </OverlayTrigger>
            )}
          </div>
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Event;
