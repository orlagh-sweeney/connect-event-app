// react imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// api imports
import { axiosReq } from "../../api/axiosDefaults";

// style imports
import appStyles from "../../App.module.css";

// react bootstrap imports
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// component imports
import Event from "./Event";
import SimilarEvents from "./SimilarEvents";
import Comment from "../comments/Comment";
import CommentCreateForm from "../comments/CommentCreateForm";

// context imports
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// imports for infinite scroll
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

function EventPage() {
  // store event id from URL
  const { id } = useParams();
  const [event, setEvent] = useState({ results: [] });

  // get current user data
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  // fetch event data based on id
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: event }, { data: comments }] = await Promise.all([
          axiosReq.get(`/events/${id}`),
          axiosReq.get(`comments/?event=${id}`),
        ]);
        setEvent({ results: [event] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={{ span: 8, offset: 2 }}>
        <Event {...event.results[0]} setEvents={setEvent} eventPage />
        <Container>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              event={id}
              setEvent={setEvent}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            <InfiniteScroll
              // eslint-disable-next-line
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setEvent={setEvent}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <div className="text-center my-2">
              Be the first to leave a comment!
            </div>
          ) : (
            <div className="text-center my-2">No comments yet</div>
          )}
        </Container>
        <hr />
        <Container className={appStyles.Content}>
          <SimilarEvents {...event.results[0]} setEvents={setEvent} />
        </Container>
      </Col>
    </Row>
  );
}

export default EventPage;
