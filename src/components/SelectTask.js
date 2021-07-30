import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function SelectTask() {
    return (
        <div>
            <Container>
                <Row className="justify-content-sm-center">
                        <Form.Label>Выбирайте вопрос</Form.Label>
                </Row>
                <Row className="justify-content-sm-center">
                    <Col md="auto" sm="auto">
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
        </div>
    );
}

export default SelectTask;