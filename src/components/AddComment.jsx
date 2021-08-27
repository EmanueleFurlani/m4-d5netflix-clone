import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  render() {
    return (
      <>
        <h6>Comment this movie</h6>
        <Form>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment this movie</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
