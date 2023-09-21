// react imports 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// api imports
import { axiosReq } from "../../api/axiosDefaults";

// react bootstrap imports
import { Card, Container } from "react-bootstrap";

// style imports
import styles from "../../styles/SimilarEvents.module.css";

// component imports 
import Asset from "../../components/Asset";

const SimilarEvents = (props) => {
  // destructure props
  const { id, type} = props;

  // store similar events 
  const [eventData, setEventData] = useState({
    similarEvents: { results: [] },
  });
  const { similarEvents } = eventData;

  // api event type filter
  const filter = `events/?attendees__owner__profile=&owner__profile=&type=${type}`;

  // get events based on event type
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/events/?${filter}`);
        setEventData((prevState) => ({
          ...prevState,
          similarEvents: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [filter]);

  return (
    <>
    <h2 className={`${styles.Header} pt-4`}>SIMILAR EVENTS</h2>
    <Container className="py-4 justify-content-center align-items-center d-md-flex">
      {similarEvents.results.length ? (
        <>
          {similarEvents.results.slice(0, 3).map((event) => (
            <div className="text-center" key={event.id}>
              <Card className={`${styles.Card} m-2`}>
                <Card.Img variant="top" src={event.image} />
                <Card.Body>
                  <Link to={`/events/${event.id}`}>
                    <h3 className={styles.Name}>{event.title}</h3>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </>
      ) : !similarEvents.results.length ? (
        <div>
          <h2 className={styles.Header}>SIMILAR</h2>
          <p>There are currently no similar events.</p>
        </div>
      ) : (
        <Asset spinner />
      )}
    </Container>
    </>
  );
};

export default SimilarEvents;
