import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Body(props) {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form.Label>Выбирайте вопрос</Form.Label>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Form.Control as="select">
                            <option>Фи-и-ильм, Фи-и-ильм, ... мультфильм ;)</option>
                            <option>Место встречи изменить нельзя</option>
                            <option>Бриллиантовая рука</option>  
                            <option>Крепкий орешек</option>
                            <option>Пословицы и поговорки</option>
                        </Form.Control>
                    </Col>
                </Row>
            </Container>  
            <p>cards here</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <h5> control buttons</h5>
        </div>
    );
}

export default Body;