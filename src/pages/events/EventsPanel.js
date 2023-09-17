import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/EventsPanel.module.css";

const EventsPanel = () => {
  const [eventData, setEventData] = useState({
    upcomingEvents: { results: [] },
  });
  const { upcomingEvents } = eventData;
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          `/events/?attendees__owner__profile=${profile_id}&owner__profile=&type=`
        );
        setEventData((prevState) => ({
          ...prevState,
          upcomingEvents: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [profile_id]);

  return (
    <Container className={appStyles.Content}>
      {upcomingEvents.results.length ? (
        <>
          <h2 className={styles.Header}>UPCOMING EVENTS</h2>
          {upcomingEvents.results.slice(0, 3).map((event) => (
            <div key={event.id}>
              <Link to={`/events/${event.id}`}>
                <h3 className={styles.Name}>{event.title}</h3>
              </Link>
              <p>{event.date}</p>
            </div>
          ))}
        </>
      ) : !upcomingEvents.results.length ? (
        <div>
          <h2 className={styles.Header}>UPCOMING EVENTS</h2>
          <p>You have no upcoming events</p>
        </div>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default EventsPanel;
