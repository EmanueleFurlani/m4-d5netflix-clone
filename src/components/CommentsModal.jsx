import { Button, Modal } from "react-bootstrap";
import React from "react";
import AddComment from "./AddComment";

class CommentsModal extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      comments: [],
    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.handleModal();
          }}
        >
          Show Details
        </Button>
        <Modal show={this.state.show} onHide={() => this.handleModal()}>
          <Modal.Header closeButton>MOVIE TITLE HERE</Modal.Header>
          <Modal.Body>
            <AddComment />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default CommentsModal;
