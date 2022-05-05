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
    const secondPartOfContent = content.slice(firstPartOfContent.length);
    return [firstPartOfContent, secondPartOfContent];
  };

  return (
    <div>
      
      <Container className="postBox">
      
        <Row className="rowdesign">
          <Col><h2>{post.fields.title}</h2></Col>
          
          
        </Row>
    
        <Row>
          <Col >
            <Image className="img-fluid imageRow"
              align="start"
              src={pictureUrl}
              alt={post.fields.title}
            />
          </Col>
          </Row>
          <Row>
          <Col>
          <p className="info">{post.fields.author}</p>
            <p className="info">{getDateFormat(date)}</p></Col>
        </Row>
        <Row className="rowdesign">
          <Col xs={12} lg={6}>
          <p className="text" style={{textAlign: "justify"}}>{sliceContent(content)[0]}</p>
          </Col>
        <Col>
          <p className="text" style={{textAlign: "justify"}}>{sliceContent(content)[1]}</p>
          </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Post;
