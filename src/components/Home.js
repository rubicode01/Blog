import React from "react";
import BigCard from "./BigCard";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SmallCard from "./SmallCard";

function Home({ posts }) {
  //get newest Post(for BigCard) and remove it from posts
  const smallPosts = [...posts];
  const newPost = smallPosts.shift();

  //Example for Accessing post details
  /*<h3>{post.fields.title}</h3>
            <p className="details">{post.fields.author}</p>
            <p className="details">{post.fields.date}</p>
            <p>{post.fields.content}</p>
            <img src={post.fields.picture.fields.file.url} />
        </> //Post ID: post.fields.sys.id*/

  return (
    <>
      {smallPosts.length > 0 && (
        <Container>
          <Row>
            <Col>
              <BigCard post={newPost} /> {/*BigCard here*/}
            </Col>
          </Row>
          <Row xs={1} s={2} md={3} style={{ justifyContent: "space-between" }}>
            {smallPosts.map((post) => (
              <Col>
              <SmallCard key={post.sys.id} post={post}/> {/*SmallCard here*/}
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default Home;
