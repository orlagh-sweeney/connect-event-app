import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/EventsPage.module.css";
import Event from "./Event";

import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function EventsPage({ message }) {
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

  const filter = `events/?attendees__owner__profile=&owner__profile=&type=${type}`;

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

    setHasLoaded(false);
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
            <Form
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                value={type}
                onChange={(event) => setType(event.target.value)}
                as="select"
                className={styles.FilterMenu}
              >
                <option>sport</option>
                <option>music</option>
                <option>culture</option>
                <option>books</option>
                <option>business</option>
                <option>fitness</option>
                <option>food and drink</option>
                <option>games</option>
              </Form.Control>
            </Form>
          </div>
        </div>

        {hasLoaded ? (
          <>
            {events.results.length ? (
                <InfiniteScroll 
                  children={
                    events.results.map((event) => (
                        <Event key={event.id} {...event} setEvents={setEvents} />
                      ))
                  }
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
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Users events</p>
      </Col>
    </Row>
  );
}

export default EventsPage;
