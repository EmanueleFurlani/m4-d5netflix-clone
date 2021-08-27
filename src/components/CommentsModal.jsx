import { Button, Modal } from "react-bootstrap";
import React from "react";

class CommentsModal extends React.Component() {
  render() {
    return (
      <div>
        <Button>Movie details</Button>
        <Modal show={true}>
          <Modal.Header>Modal Header</Modal.Header>
          <Modal.Body>Test info</Modal.Body>
        </Modal>
        <Modal.Footer>
          <Button>Close modal</Button>
        </Modal.Footer>
      </div>
    );
  }
}

export default CommentsModal;
