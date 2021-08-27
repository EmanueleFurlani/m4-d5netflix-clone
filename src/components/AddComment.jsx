import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    body: {
      comment: "",
      rate: 1,
      elementId: this.props.selectedMovie.imdbID,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.body),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjYyZjJkNTI2MjAwMTViNmRjOTUiLCJpYXQiOjE2MjkyODc5ODMsImV4cCI6MTYzMDQ5NzU4M30.nNXVsU3Xm3rtBjwRiDZJUn8LcZawq-ItVaCq0cX5GZs",
        },
      });
    } catch (error) {}
  };
  render() {
    return (
      <>
        <h5>Add new comment</h5>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="comment">
            <Form.Label>Your comment:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.body.comment}
              onChange={(e) => {
                this.setState({
                  body: {
                    ...this.state.body,
                    comment: e.target.value,
                  },
                });
              }}
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="rate">
            <Form.Label>Your rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.body.rate}
              onChange={(e) => {
                this.setState({
                  body: {
                    ...this.state.body,
                    rate: e.target.value,
                  },
                });
              }}
            >
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
