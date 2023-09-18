import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import EventsPanel from "../events/EventsPanel";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();

  useEffect(() => {
      setHasLoaded(true);
  }, [])

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-left">
        <Col lg={3} className="text-lg-left">
          <p>Profile Image</p>
        </Col>
        <Col lg={6}>
          <h2 className="m-2">Profile username</h2>
          <p>Member since</p>
          <p>Bio</p>
        </Col>
        <Col lg={3} className="text-lg-right">
        <p>Dropdown menu</p>
        </Col>
      </Row>
    </>
  );

  const mainProfileStats = (
    <>
      <hr />
      <p className="text-center">Profile owner's stats</p>
      <hr />
    </>
  );

  const mainProfileEvents = (
    <>
      <hr />
      <p className="text-center">Profile owner's organised events</p>
      <hr />
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfileStats}
              {mainProfileEvents}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      {currentUser &&
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <EventsPanel />
      </Col>
      }
    </Row>
  );
}

export default ProfilePage;