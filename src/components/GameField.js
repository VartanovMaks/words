import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import word from './stylesCards.css';

function GameField() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={6} md={6} lg={4} className="word">Слово 1</Col>
                <Col xs={12} sm={6} md={6} lg={4} className="word">Слово 2</Col>
                <Col xs={12} sm={6} md={6} lg={4} className="word">Слово 3</Col>
                <Col xs={12} sm={6} md={6} lg={4} className="word">Слово 4</Col>
                <Col xs={12} sm={6} md={6} lg={4} className="word">Слово 5</Col>
            </Row>
        </Container>
    );
}

export default GameField;