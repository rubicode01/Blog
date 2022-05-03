import React from "react";
import { useParams } from "react-router-dom";
import {Row, Container, Col} from 'react-bootstrap'


function Post({ posts }) {
  //console.log(posts);
  const { id } = useParams();
  const post = posts.find((post) => id === post.sys.id);
  console.log(post)
  const pictureUrl = post.fields.picture.fields.file.url;
  const date = post.fields.date;
  console.log(date);

const getDateFormat = (articleDate) =>{
  const myDateArray = articleDate.slice(0, 10);
  const newDateFormat = myDateArray.split("-").reverse().join("-");
  return newDateFormat;
}

console.log(getDateFormat(date));

  return (
    <div>
      <h1>{post.fields.title}</h1>
      <Container>
      <Row>
        <Col>
      <b>{post.fields.author}</b>: {getDateFormat(date)}
      </Col>
      </Row>
      </Container>
      <div>
        <img
          
          src={pictureUrl} alt={post.fields.title}

        />
      </div>
      <div>
        <h3>{post.fields.title}</h3>
        <p>author: {post.fields.author}</p>
        <p>date: {post.fields.date}</p>
        <br></br>
        <p>{post.fields.content}</p>
      </div>
    </div>
  );
}

export default Post;
