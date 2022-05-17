import React from "react";
import { Image, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function BigCard({ post }) {
  //Create preview text
  const previewLength = 35;
  const text = post.content.split(" ");
  let previewText = "";
  for (let i = 0; i < previewLength; i++) {
    previewText = previewText + " " + text[i];
  }

  return (
    <>
      <Container className="carddesign containerdesign">
        <Row xs={1} md={2}>
          <Col>
            <Image
              className="image img-fluid cardimg "
              fluid
              src={post.url}
            />
          </Col>

          <Col className="big-card-body">
            <h3>{post.title}</h3>

            <p className="text">{previewText}</p>
            <Link to={post.id}>
              <Button variant="secondary" className="btn-card btn-big-card" size="sm">
                Read more
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BigCard;
