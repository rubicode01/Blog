import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const AddPost = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <h2>Add Your own Article</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
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
              required
              type="text"
              placeholder="Enter your last Name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter the title of your article"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Picture - URL</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ex: https://example.com/example.jpg "
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Picture - Description</Form.Label>
            <Form.Control
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
    </>
  );
};

export default AddPost;
