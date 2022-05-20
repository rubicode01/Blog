import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import { Container, Row, Col } from "react-bootstrap";

function Home({ posts }) {
  //get newest Post(for BigCard) and remove it from posts
  const smallPosts = [...posts];
  const newPost = smallPosts.shift();
  console.log(posts);

  return (
    <>
      {smallPosts.length > 0 && (
        <Container>
          <Row>
            <Col>
              <BigCard post={newPost} />
            </Col>
          </Row>
          <Row xs={1} s={2} md={3} style={{ justifyContent: "" }}>
            {smallPosts.map((post) => (
              <Col key={post.id}>
                <SmallCard post={post} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default Home;
