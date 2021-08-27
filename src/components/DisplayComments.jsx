import { Component } from "react";
import { Button } from "react-bootstrap";

class DisplayComments extends Component {
  state = {
    comments: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.selectedMovie,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjYyZjJkNTI2MjAwMTViNmRjOTUiLCJpYXQiOjE2MjkyODc5ODMsImV4cCI6MTYzMDQ5NzU4M30.nNXVsU3Xm3rtBjwRiDZJUn8LcZawq-ItVaCq0cX5GZs",
          },
        }
      );
      const data = await response.json();
      this.setState({
        comments: data,
      });
    } catch {}
  }

  render() {
    return (
      <>
        <h5>Comments:</h5>
        <ul>
          {this.state.comments.map((c) => (
            <li>{c.comment}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default DisplayComments;
