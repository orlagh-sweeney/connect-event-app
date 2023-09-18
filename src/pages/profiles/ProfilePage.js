import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import EventsPanel from "../events/EventsPanel";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Event from "../events/Event";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";

const ProfilePage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();

  const [profileData, setProfileData] = useState({ results: [] });
  const [profileEvents, setProfileEvents ] = useState({ results: [] });

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

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-left">
        <Col lg={3} className="text-lg-left">
          <p>Profile Image</p>
        </Col>
        <Col lg={6}>
          <h2 className="m-2">{profileData.owner}</h2>
          <p>Member since</p>
          <p>{profileData.attending_count}</p>
          <p>{profileData.attended_count}</p>
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

  // display events the profile owners has organised 
  const mainProfileEvents = (
    <>
      <hr />
      <p className="text-center">Profile owner's organised events</p>
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