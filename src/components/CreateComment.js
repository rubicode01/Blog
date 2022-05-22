import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function CreateComment() {
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    comment: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ "name": e.target.name.value, "comment": e.target.comment.value})
    axios.post(`http://localhost:5000/api/posts/${id}/comments`, {
      name: e.target.name.value,
      comment: e.target.comment.value
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    window.location.reload(false);
  }

  return (
    <div className="comment-form">
      <h3 className="comment-form-title">Write a Comment</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="input" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Comment</Form.Label>
          <Form.Control name="comment" as="textarea" rows={3} />
        </Form.Group>
        <Button className="btn-card" variant="secondary" type="submit">
              Submit
            </Button>
      </Form>
    </div>
  );
}

export default CreateComment;
