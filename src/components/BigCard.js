import React from "react";
import bootstrap from "bootstrap";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Image, Button } from "react-bootstrap";

function BigCard({post}) {
  const article = post.fields;
  return (
    /*<Container fluid>
      <Card className="big-card" style={{ width: "80%", height: "auto" }}>
        <Card.Img
          className="big-card-img"
          src="https://www2.tuhh.de/zll/wp-content/uploads/placeholder.png"
        />
        <Card.Body className="big-card-body">
          <Card.Title>
            <h3>Card Title</h3>
          </Card.Title>
          <Card.Text className="big-card-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet...
          </Card.Text>
          <Button variant="outline-primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>*/
    <Container fluid className="big-card">
      <Row>
        <Col lg>
        <Image fluid
          className="big-card-img"
          src="https://www2.tuhh.de/zll/wp-content/uploads/placeholder.png"
        />
        </Col>
        <Col lg className="big-card-body">
          <h3>{article.title}</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet... </p>
            <Button variant="outline-primary" className="big-card-button">Zum Artikel</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BigCard;
