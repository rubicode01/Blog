import React from "react";
import Comment from "./Comment"
import { useParams } from "react-router-dom";
import { Row, Container, Col, Image } from "react-bootstrap";

import AddPost from "./AddPost";

import CreateComment from "./CreateComment";


function Post({ posts }) {
  const { id } = useParams();
  const post = posts.find((post) => id == post.id);
  console.log(post);
  const pictureUrl = post.url;

  const date = post.date;

  /*Get the whished date format DD-MM-YYYY*/
  const getDateFormat = (articleDate) => {
    const myDateArray = articleDate.slice(0, 10);
    const newDateFormat = myDateArray.split("-").reverse().join("-");
    return newDateFormat;
  };

  const content = post.content;
  console.log(content);

  /*Slice the Content in two parts*/
  const sliceContent = (content) => {
    const firstPartOfContent = content.slice(0, content.length / 2);
    const secondPartOfContent = content.slice(firstPartOfContent.length);
    return [firstPartOfContent, secondPartOfContent];
  };

  return (
    <div>
      <Container className="postBox">
        <Row className="rowdesign">
          <Col>
            <h2>{post.title}</h2>
            {/* <p className="info">{post.fields.author}</p>
            <p className="info">{getDateFormat(date)}</p> */}
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
            <Image
              className="img-fluid imageRow"
              align="start"
              src={pictureUrl}
              alt={post.title}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="info">{post.author}</p>
            <p className="info">{getDateFormat(date)}</p>
          </Col>
        </Row>
        <Row className="rowdesign">
          <Col xs={12} lg={6}>
            <p className="text" style={{ textAlign: "justify" }}>
              {sliceContent(content)[0]}
            </p>
          </Col>
          <Col>
            <p className="text" style={{ textAlign: "justify" }}>
              {sliceContent(content)[1]}
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="postBox comment-container">
        <Row className="comments-heading">
          <h3>Comments</h3>
        </Row>
        <Row>
          <Comment />
        </Row>
        <Row>
         <Comment />
        </Row>
        <Row>
         <CreateComment />
        </Row>
      </Container>

    </div>
  );
}

export default Post;
