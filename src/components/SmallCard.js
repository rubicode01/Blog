import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

/*Get the whished date format DD-MM-YYYY*/
const getDateFormat = (articleDate) => {
  const myDateArray = articleDate.slice(0, 10);
  const newDateFormat = myDateArray.split("-").reverse().join("-");
  return newDateFormat;
};

function SmallCard({ post }) {
  return (
    <>
      <Card className="carddesign">
        <Image
          style={{ height: "10rem", resizeMode: "resize" }}
          className="image"
          src={post.url}
        />
        <Card.Body style={{ height: "5rem" }}>
          <Card.Title>
            <h4>{post.title}</h4>
          </Card.Title>
        </Card.Body>
        <Card.Footer className="linkcard">
          <Link to={post.id}>
            <Button className="btn-card" variant="secondary" size="sm">
              Read more
            </Button>
          </Link>
        </Card.Footer>
        <Card.Footer className="linkcard">
          <small className="info">{getDateFormat(post.date)}</small>
        </Card.Footer>
      </Card>
    </>
  );
}

export default SmallCard;
