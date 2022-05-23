import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function CreateComment() {
  const api = process.env.REACT_APP_API;
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    comment: "",
  })

  const handleSubmit = (e) => {
    setValues({ 
      name: e.target.name.value, 
      comment: e.target.comment.value});
    console.log(values);
    console.log(e.target.name.value);
    axios.post(`${api}/api/posts/${id}/comments`, {
      name: e.target.name.value, 
      comment: e.target.comment.value 
    }, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    //window.location.reload(false);
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
