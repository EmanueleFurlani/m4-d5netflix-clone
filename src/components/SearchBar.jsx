import React from 'react'
import SingleBook from './SingleBook' //<-- single movie
import { Col, Container, Form, Row } from 'react-bootstrap'

class BookList extends React.Component {

    state = {
        searchQuery: ''
    }

    render() {
        return (
            <Container id="cont">
                <Row>
                    <Col id="col1">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={this.state.searchQuery}
                                onChange={e => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {
                        this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (
                            <Col xs={3} key={b.asin} >
                                <SingleBook book={b} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }

}

export default BookList