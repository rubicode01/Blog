import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Comment({ comment }) {
  /*Get the whished date format DD-MM-YYYY*/
  const getDateFormat = (articleDate) => {
    const myDateArray = articleDate.slice(0, 10);
    const newDateFormat = myDateArray.split("-").reverse().join("-");
    return newDateFormat;
  };

  return (
    <div className="comment">
      <p className="text comment-date">{getDateFormat(comment.date)}</p>
      <p className="text comment-author">{comment.name}</p>
      <p className="text">{comment.comment}</p>
    </div>
  );
}

export default Comment;
