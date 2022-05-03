import React from "react";
import bootstrap from "bootstrap";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BigCard({post}) {
  const previewLength = 45;
  const text = post.fields.content.split(" ");
  let previewText = "";
  for(let i = 0; i < previewLength; i ++)
  {
    previewText = previewText + " " + text[i];
    console.log("preview: " + previewText);

  }
  console.log(text);
  return (
    <Container fluid className="big-card">
      <Row>
        <Col lg>
        <Image fluid
          className="big-card-img"
          src="https://www2.tuhh.de/zll/wp-content/uploads/placeholder.png"
        />
        </Col>
        <Col lg className="big-card-body">
          <h3>{post.fields.title}</h3>
        <p>{previewText}...</p> 
            <Link to={post.sys.id}><Button variant="outline-primary" className="big-card-button">Zum Artikel</Button></Link>
        </Col>
      </Row>
    </Container>
  );
}

export default BigCard;
