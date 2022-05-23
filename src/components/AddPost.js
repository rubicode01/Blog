import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import axios from "axios";

const AddPost = () => {
  const [validated, setValidated] = useState(false);
  const [post, setPost] = useState(null);
  const api = process.env.REACT_APP_API;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    const fName = event.target.first_name.value;
    const lName = event.target.last_name.value;
    const title_ = event.target.title.value;
    const pictureUrl = event.target.url.value;
    const pictureDesc = event.target.pictureDesc.value;
    const articleText = event.target.content.value;

    setPost({
      first_name: fName,
      last_name: lName,
      title: title_,
      url: pictureUrl,
      description: pictureDesc,
      content: articleText,
    });

    console.log(post);
  };

  useEffect(() => {
    if (post) {
      console.log(post);
      axios
        .post(`${api}/api/posts`, post, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log(".....");
    }
  }, [post]);

  return (
    <>
      <h2>Add Your own Article</h2>
      <Container className="carddesign containerdesign">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 mx-5 justify-content-start">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="first_name"
                required
                type="text"
                placeholder="Enter your first Name"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="last_name"
                required
                type="text"
                placeholder="Enter your last Name"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3 mx-5 justify-content-start">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                required
                type="text"
                placeholder="Enter the title of your article"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Picture - URL</Form.Label>
              <Form.Control
                name="url"
                required
                type="text"
                placeholder="Ex: https://example.com/example.jpg "
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Picture - Description</Form.Label>
              <Form.Control
                name="pictureDesc"
                required
                type="text"
                placeholder="Picture description"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3 mx-5"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Enter your Text here</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  name="content"
                  required
                  type="text"
                  placeholder="Enter text article"
                  defaultValue=""
                />
                <Form.Control.Feedback isInvalid>
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="">
            <Col>
              <Button
                className="btn-card my-3"
                variant="secondary"
                size="md"
                style={{ float: "none" }}
                type="submit"
              >
                Send article
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default AddPost;
