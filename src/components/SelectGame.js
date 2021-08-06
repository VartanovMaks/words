import React, { useContext } from 'react';
import {Row,Col, Container, Form} from 'react-bootstrap';
import { GameContext } from './ContextComponent';

function SelectGame() {


    return (
            <Container>
                <Row className="justify-content-sm-center">
                    <h3>Выберите игру</h3>
                </Row>
                <Form.Group as={Row} className="my-3">
                    <Form.Label as="legend" column sm={4} />
                    <Col sm={8}>
                        <Form.Check 
                            type="radio"
                            label="Новый год 2020"
                            name="radioSelectGame"
                            id="Game1"
                            className="my-3"
                        />
                        <Form.Check 
                            type="radio"
                            label="Корпоратив декабрь "
                            name="radioSelectGame"
                            id="Game2"
                            className="my-3"
                        />
                        <Form.Check 
                            type="radio"
                            label=" Ясик август 202 "
                            name="radioSelectGame"
                            id="Game3"
                            className="my-3"
                        />
                    </Col>
                </Form.Group>
            </Container>
    );
}

export default SelectGame;