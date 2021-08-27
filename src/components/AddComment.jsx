import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  // state = {
  //   comment: {
  //     name:,
  //   }
  // }
  render() {
    return (
      <>
        <h5>Add new comment</h5>
        <Form>
          <Form.Group className="mb-3" controlId="comment">
            <Form.Label>Your comment:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="my-3" controlId="rate">
            <Form.Label>Your rating</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Add comment
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
