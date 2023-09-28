// react importss
import React, { useEffect, useState } from "react";

// api imports
import { axiosReq } from "../../api/axiosDefaults";

// react bootstrap impots
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// style imports
import appStyles from "../../App.module.css";
import styles from "../../styles/EventsPage.module.css";

// component imports
import Event from "./Event";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import EventsPanel from "./EventsPanel";
import { categories } from "../../utils/categories";
import { fetchMoreData } from "../../utils/utils";

// context imports
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function EventsPage({ message }) {
  // store events
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  // store type and query values
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

  // api filter for event type
  const filter = `events/?attendees__owner__profile=&owner__profile=&type=${type}`;

  // get current user
  const currentUser = useCurrentUser();

  // fetch events from api
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(
          `/events/?${filter}&search=${query}`
        );
        setEvents(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    const timer = setTimeout(() => {
      fetchEvents();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query, filter]);

  return (
    <Row className="h-100 px-4 px-md-none">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <div>
          <div>
            <p>Find an event:</p>
            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form
              className={styles.SearchBar}
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Search events"
              />
            </Form>
          </div>
          <div>
            <p>Filter by category:</p>
            <i className={`fa-solid fa-filter ${styles.SearchIcon}`} />
            <Form onSubmit={(event) => event.preventDefault()}>
              <Form.Control
                value={type}
                onChange={(event) => setType(event.target.value)}
                as="select"
                className={styles.FilterMenu}
              >
                <option value={""}>All</option>
                {categories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {category.value}
                  </option>
                ))}
              </Form.Control>
            </Form>
          </div>
        </div>

        {hasLoaded ? (
          <>
            {events.results.length ? (
              <InfiniteScroll
                // eslint-disable-next-line
                children={events.results.map((event) => (
                  <Event key={event.id} {...event} setEvents={setEvents} />
                ))}
                dataLength={events.results.length}
                loader={<Asset spinner />}
                hasMore={!!events.next}
                next={() => fetchMoreData(events, setEvents)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      {currentUser && (
        <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
          <EventsPanel />
        </Col>
      )}
    </Row>
  );
}

export default EventsPage;
