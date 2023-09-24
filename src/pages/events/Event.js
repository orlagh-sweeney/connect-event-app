// react imports 
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

// api imports
import { axiosRes } from "../../api/axiosDefaults";

// style imports
import styles from "../../styles/Event.module.css";

// react boostrap imports 
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";

// component imports
import { DropdownMenu } from "../../components/DropdownMenu";
import Tag from "../../components/Tag";

const Event = (props) => {
  // destructure props
  const {
    id,
    owner,
    profile_id,
    attending_count,
    attending_id,
    title,
    content,
    image,
    date,
    time,
    location,
    type,
    eventPage,
    setEvents,
  } = props;

  // get current user
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const history = useHistory();

  // send the event owner to the event edit form
  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  // handle delete event request
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  // allows users to attend an event
  const handleAttend = async () => {
    try {
      const { data } = await axiosRes.post("/attendees/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                attending_count: event.attending_count + 1,
                attending_id: data.id,
              }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // allows users to unattend an event
  const handleUnattend = async () => {
    try {
      await axiosRes.delete(`/attendees/${attending_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                attending_count: event.attending_count - 1,
                attending_id: null,
              }
            : event;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Event}>
      {eventPage ? (
        <div className="px-4">
          <Card.Body className={styles.Body}>
            <Media className="align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span>
                  <h1 className={styles.Header}>{title}</h1>
                </span>
              </div>
              <div className="d-flex align-items-center">
                {is_owner && (
                  <DropdownMenu
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )}
              </div>
            </Media>
          </Card.Body>
          <Link to={`/events/${id}`}>
            <Card.Img src={image} alt={title} />
          </Link>
          <Card.Body className={styles.Body}>
            <Media className="align-items-center justify-content-between">
              <div className="align-items-center text-left">
                <div>
                  <strong>{date}</strong>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span>
                  Host: <strong><Link to={`/profiles/${profile_id}`}>{owner}</Link></strong>
                </span>
              </div>
            </Media>
            <Media className="align-items-center justify-content-between">
              <div className="align-items-center text-left">{time}</div>
              <div className="d-flex align-items-center">
                <span>Attending: {attending_count}</span>
              </div>
            </Media>
          </Card.Body>
          <Card.Body className={styles.Body}>
            <Card.Text className="align-items-center d-block text-left">
              <span className={styles.Heading}>Location:</span><br />
              <span>{location}</span>
            </Card.Text>
          </Card.Body>
          <Card.Body className={styles.Body}>
            <Card.Text className="align-items-center d-block text-left">
              <span className={styles.Heading}>Description:</span><br />
              <span className="text-left">{content}</span>
            </Card.Text>
          </Card.Body>
          <Card.Body className={styles.Body}>
            <Media className="align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Tag text={type} />
              </div>
              <div>
                {is_owner ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>You cannot un-register your own event.</Tooltip>
                    }
                  >
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Light}`}
                    >
                      Going
                    </Button>
                  </OverlayTrigger>
                ) : attending_id ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Click to unattend</Tooltip>}
                  >
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Light}`}
                      onClick={handleUnattend}
                    >
                      Going
                    </Button>
                  </OverlayTrigger>
                ) : currentUser && !attending_id ? (
                  <OverlayTrigger
                    placeement="top"
                    overlay={<Tooltip>Click to attend</Tooltip>}
                  >
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Dark}`}
                      onClick={handleAttend}
                    >
                      Register
                    </Button>
                  </OverlayTrigger>
                ) : (
                  <OverlayTrigger
                    placeement="top"
                    overlay={<Tooltip>Log in to attend this evnet</Tooltip>}
                  >
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Dark}`}
                      onClick={() => {}}
                    >
                      Register
                    </Button>
                  </OverlayTrigger>
                )}
              </div>
            </Media>
          </Card.Body>
        </div>
      ) : (
        <div>
          <Link to={`/events/${id}`}>
            <Card.Img src={image} alt={title} />
          </Link>
          <Card.Body className={styles.Body}>
            <Media className="align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                  <strong>{date}</strong>
              </div>
              <div className="d-flex align-items-center">
                <span>Attending: {attending_count}</span>
              </div>
            </Media>
            <Media className="align-items-center justify-content-between">
              <div className="align-items-center text-left">{time}</div>
            </Media>
          </Card.Body>
          <Card.Body className={styles.Body}>
            <Card.Text className="text-left mb-0">
                {title && (
                  <span className={styles.Title}>
                    {title}
                  </span>
                )}
            </Card.Text>
            <Card.Text className="text-left">
                {location && (
                  <span>{location}</span>
                )}
            </Card.Text>
          </Card.Body>
          <Card.Body className={styles.Body}>
            <Media className="align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Tag text={type} />
              </div>
              <div>
                {is_owner ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>You cannot un-register from your own event.</Tooltip>
                    }
                  >
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Light}`}
                    >
                      Going
                    </Button>
                  </OverlayTrigger>
                ) : attending_id ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Click to unregister</Tooltip>}
                  >
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Light}`}
                      onClick={handleUnattend}
                    >
                      Going
                    </Button>
                  </OverlayTrigger>
                ) : currentUser && !attending_id ? (
                  <OverlayTrigger
                    placeement="top"
                    overlay={<Tooltip>Click to register</Tooltip>}
                  >
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Dark}`}
                      onClick={handleAttend}
                    >
                      Register
                    </Button>
                  </OverlayTrigger>
                ) : (
                  <OverlayTrigger
                    placeement="top"
                    overlay={<Tooltip>Log in to attend this evnet</Tooltip>}
                  >
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Dark}`}
                      onClick={() => {}}
                    >
                      Register
                    </Button>
                  </OverlayTrigger>
                )}
              </div>
            </Media>
          </Card.Body>
        </div>
      )}
    </Card>
  );
};

export default Event;
