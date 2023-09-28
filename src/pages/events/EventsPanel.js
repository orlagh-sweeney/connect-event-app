// react imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// api imports
import { axiosReq } from "../../api/axiosDefaults";

// react bootstrap imports
import Container from "react-bootstrap/Container";

// style imports
import appStyles from "../../App.module.css";
import styles from "../../styles/EventsPanel.module.css";

// componet imports
import Asset from "../../components/Asset";

// context imports
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const EventsPanel = () => {
  // store upcomingEvents
  const [eventData, setEventData] = useState({
    upcomingEvents: { results: [] },
  });
  const { upcomingEvents } = eventData;
  const [hasLoaded, setHasLoaded] = useState(false);

  // get current user
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  // get events that the current user is attending
  useEffect(() => {
    // track if component is mounted
    let isMounted = true;
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          `/events/?attendees__owner__profile=${profile_id}&owner__profile=&type=`
        );
        // check if component is mounted, update state if mounted
        if (isMounted) {
          setEventData((prevState) => ({
            ...prevState,
            upcomingEvents: data,
          }));
          setHasLoaded(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();

    // clean up function
    return () => {
      isMounted = false;
    };
  }, [profile_id]);

  return (
    <Container className={appStyles.Content}>
      {hasLoaded ? (
        <>
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
          ) : (
            <div>
              <h2 className={styles.Header}>UPCOMING EVENTS</h2>
              <p className="text-center">You have no upcoming events</p>
            </div>
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default EventsPanel;
