import React from "react";
import { Card, Button } from "react-bootstrap";
import bootstrap from "bootstrap";

function BigCard() {
  return (
<Card className="big-card" style={{ width: '80%', height: '50rem' }}>
  <Card.Img className="big-card-img"  src="https://www2.tuhh.de/zll/wp-content/uploads/placeholder.png" />
  <Card.Body>
    <Card.Title><h3>Card Title</h3></Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  );
}

export default BigCard;
