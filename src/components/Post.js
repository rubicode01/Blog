import React from "react";
import { useParams } from "react-router-dom";
import { Row, Container, Col, Image } from "react-bootstrap";

function Post({ posts }) {
  const { id } = useParams();
  const post = posts.find((post) => id === post.sys.id);
  const pictureUrl = post.fields.picture.fields.file.url;
  //console.log(post)

  const date = post.fields.date;

  /*Get the whished date format DD-MM-YYYY*/
  const getDateFormat = (articleDate) => {
    const myDateArray = articleDate.slice(0, 10);
    const newDateFormat = myDateArray.split("-").reverse().join("-");
    return newDateFormat;
  };

  const content = post.fields.content;
  console.log(content);

  /*Slice the Content in two parts*/
  const sliceContent = (content) => {
    const firstPartOfContent = content.slice(0, content.length / 2);
    const secondPartOfContent = content.slice(firstPartOfContent);
    return [firstPartOfContent, secondPartOfContent];
  };

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

      <Container>
        <Row style={{justifyContent : "center"}}>
          <Col xs={6} md={12}>
            <Image
              align="start"
              src={pictureUrl}
              alt={post.fields.title}
              rounded
              className="img-fluid shadow rounded my-5"
              responsive
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
          <p style={{textAlign: "justify"}}>{sliceContent(content)[0]}</p>
          </Col>
       
        <Col>
          <p style={{textAlign: "justify"}}>{sliceContent(content)[1]}</p>
          </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Post;
