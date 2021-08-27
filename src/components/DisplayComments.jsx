import { Component } from "react";

class DisplayComments extends Component {
  comments = [];
  componentDidMount() {
    try {
      const response = fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.selectedMovie,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjYyZjJkNTI2MjAwMTViNmRjOTUiLCJpYXQiOjE2MjkyODc5ODMsImV4cCI6MTYzMDQ5NzU4M30.nNXVsU3Xm3rtBjwRiDZJUn8LcZawq-ItVaCq0cX5GZs",
          },
        }
      );
      const data = response.json();
      this.comments.push(data);
    } catch {}
  }

  render() {
    return (
      <>
        <h5>Comments:</h5>
        <ul>
          <button onClick={console.log(this.comments)}>click</button>
        </ul>
      </>
    );
  }
}

export default DisplayComments;
