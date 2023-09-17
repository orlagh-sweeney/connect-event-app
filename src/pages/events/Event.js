import React from "react";
import styles from "../../styles/Event.module.css";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";

import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";

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
                  <h1>{title}</h1>
                </span>
              </div>
              <div className="d-flex align-items-center">
                <span>delete/edit button</span>
              </div>
            </Media>
          </Card.Body>
          <Link to={`/events/${id}`}>
            <Card.Img src={image} alt={title} />
          </Link>
          <Card.Body className={styles.Body}>
            <Media className="align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span>
                  {date}: {time}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <span>
                  Organiser: <Link to={`/profiles/${profile_id}`}>{owner}</Link>
                </span>
              </div>
            </Media>
          </Card.Body>
          <Card.Body className={styles.Body}>
            <Media className="align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <span>Location: {location}</span>
              </div>
              <div className="d-flex align-items-center">
                <span>Attendees: {attending_count}</span>
              </div>
            </Media>
          </Card.Body>
          <Card.Body className={styles.Body}>
            <Media>
              <div>
                <span>{content}</span>
              </div>
            </Media>
          </Card.Body>
          <Card.Body className={styles.Body}>
            <Media className="align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Button className={`${btnStyles.Type}`}>{type}</Button>
              </div>
              <div>
                {is_owner ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>You cannot de-register your own event.</Tooltip>
                    }
                  >
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Light}`}
                    >
                      Attending
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
                      Attending
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
                      Not attending
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
                      Not attending
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
                <span>
                  {date}: {time}
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
                {title && (
                  <Card.Title className="text-left">{title}</Card.Title>
                )}
                {location && (
                  <Card.Text className="text-left">{location}</Card.Text>
                )}
              </div>
            </Media>
          </Card.Body>
          <Card.Body className={styles.Body}>
            <Media className="align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Button className={`${btnStyles.Type}`}>{type}</Button>
              </div>
              <div>
                {is_owner ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>You cannot de-register your own event.</Tooltip>
                    }
                  >
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Light}`}
                    >
                      Attending
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
                      Attending
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
                      Not attending
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
                      Not attending
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

//   return (
//     <Card className={styles.Event}>
//       <Link to={`/events/${id}`}>
//         <Card.Img src={image} alt={title} />
//       </Link>
//       <Card.Body className={styles.Body}>
//         <Media className="align-items-center justify-content-between">
//           <div className="d-flex align-items-center">
//             <span>
//               {date}: {time} CEST
//             </span>
//           </div>
//           <div className="d-flex align-items-center">
//             <span>Attendees: {attending_count}</span>
//           </div>
//         </Media>
//       </Card.Body>
//       <Card.Body className={styles.Body}>
//         <Media className="align-items-center justify-content-between">
//           <div>
//             {title && <Card.Title className="text-left">{title}</Card.Title>}
//             {location && (
//               <Card.Text className="text-left">{location}</Card.Text>
//             )}
//           </div>
//         </Media>
//       </Card.Body>
//       <Card.Body className={styles.Body}>
//         <Media className="align-items-center justify-content-between">
//           <div className="d-flex align-items-center">
//             <Button className={`${btnStyles.Type}`}>
//               {type}
//             </Button>
//           </div>
//           <div>
//             {is_owner ? (
//               <OverlayTrigger
//                 placement="top"
//                 overlay={
//                   <Tooltip>You cannot de-register your own event.</Tooltip>
//                 }
//               >
//                 <Button className={`${btnStyles.Button} ${btnStyles.Light}`}>
//                   Attending
//                 </Button>
//               </OverlayTrigger>
//             ) : attending_id ? (
//               <OverlayTrigger
//                 placement="top"
//                 overlay={<Tooltip>Click to unattend</Tooltip>}
//               >
//                 <Button
//                   className={`${btnStyles.Button} ${btnStyles.Light}`}
//                   onClick={handleUnattend}
//                 >
//                   Attending
//                 </Button>
//               </OverlayTrigger>
//             ) : currentUser && !attending_id ? (
//               <OverlayTrigger
//                 placeement="top"
//                 overlay={<Tooltip>Click to attend</Tooltip>}
//               >
//                 <Button
//                   className={`${btnStyles.Button} ${btnStyles.Dark}`}
//                   onClick={handleAttend}
//                 >
//                   Not attending
//                 </Button>
//               </OverlayTrigger>
//             ) : (
//               <OverlayTrigger
//                 placeement="top"
//                 overlay={<Tooltip>Log in to attend this evnet</Tooltip>}
//               >
//                 <Button
//                   className={`${btnStyles.Button} ${btnStyles.Dark}`}
//                   onClick={() => {}}
//                 >
//                   Not attending
//                 </Button>
//               </OverlayTrigger>
//             )}
//           </div>
//         </Media>
//       </Card.Body>
//     </Card>
//   );
// };

export default Event;
