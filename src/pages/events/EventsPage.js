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

function EventsPage({ message }) {
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);

  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

  const filter = `events/?attendees__owner__profile=&owner__profile=&type=${type}`

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(`/events/?${filter}&search=${query}`);
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
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
      <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search events"
          />
        </Form>

        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={type}
            onChange={(event) => setType(event.target.value)}
            as="select"
            className="mr-sm-2"
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

        {hasLoaded ? (
          <>
            {events.results.length ? (
              events.results.map((event) => (
                <Event key={event.id} {...event} setEvents={setEvents} />
              ))
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
