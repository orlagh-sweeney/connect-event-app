import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/ProfilePage.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import EventsPanel from "../events/EventsPanel";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Event from "../events/Event";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import { Image } from "react-bootstrap";

const ProfilePage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();

  const [profileData, setProfileData] = useState({ results: [] });
  const [profileEvents, setProfileEvents] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: profileData }, { data: profileEvents }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/events/?owner__profile=${id}`),
          ]);
        setProfileData(profileData);
        setProfileEvents(profileEvents);
        // hide the loader
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const is_owner = currentUser?.username === profileData.owner;

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-lg-left">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profileData?.image}
          />
        </Col>
        <Col lg={6}>
          <h2 className="m-2">{profileData.owner}</h2>
          <p className="m-2">
            <strong>Member since:</strong> {profileData.created_at}
          </p>
          <p className="m-2">
            <strong>Bio: </strong>
            {profileData.content}dfdvd
          </p>
        </Col>
        { is_owner && <Col lg={3} className="text-lg-right">
          <p>Dropdown menu</p>
        </Col>}
      </Row>
    </>
  );

  const mainProfileStats = (
    <>
      <Row noGutters className="px-3 pt-5 text-lg-left">
        <Col lg={6} className="text-center">
          <h2 className={`${styles.Stat} m-2`}>Events Organised</h2>
          <p>{profileData.events_count}</p>
        </Col>
        <Col lg={6} className="text-center">
          <h2 className={`${styles.Stat} m-2`}>Events Attended</h2>
          <p>{profileData.attended_count}</p>
        </Col>
      </Row>
    </>
  );

  // display events the profile owners has organised
  const mainProfileEvents = (
    <>
      <h2 className={`${styles.Events} text-left m-2`}>Events by {profileData.owner}:</h2>
      {profileEvents.results.length ? (
        <InfiniteScroll
          children={
            // if it does, map over posts and render each one
            profileEvents.results.map((event) => (
              <Event key={event.id} {...event} setEvents={setProfileEvents} />
            ))
          }
          dataLength={profileEvents.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileEvents.next}
          next={() => fetchMoreData(profileEvents, setProfileEvents)}
        />
      ) : (
        <p>No results</p>
      )}
    </>
  );

  return (
    <Row className="pt-2">
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
      {is_owner && (
        // only display if the user is the profile owner
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
          <EventsPanel />
        </Col>
      )}
    </Row>
  );
};

export default ProfilePage;
