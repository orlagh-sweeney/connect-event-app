import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function EventPage() {
  // store event id from URL
  const { id } = useParams();
  const [event, setEvent] = useState({ results: [] });

  // fetch event data based on id
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: event }] = await Promise.all([
          axiosReq.get(`/events/${id}`),
        ]);
        setEvent({ results: [event] });
        console.log(event);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Post component</p>
        <Container className={appStyles.Content}>Comments</Container>
        <Container className={appStyles.Content}>Similar events</Container>
      </Col>
    </Row>
  );
}

export default EventPage;
