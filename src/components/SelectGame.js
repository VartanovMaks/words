import React from 'react';
import {Row,Col, Container, Form} from 'react-bootstrap';
import Game from './Game';
import gamesBase from '../data'

function SelectGame() {
    
    return (
            <Container>
                <Row className="justify-content-sm-center">
                    <h3>Выберите игру</h3>
                </Row>
                <Form.Group as={Row} className="my-3">
                    <Form.Label as="legend" column sm={4} />
                    <Col sm={8}>
                        {
                         gamesBase.map((item,index)=> 
                            <Game gameName={item.name} index={index} key={index+item.name}/>
                            )   
                        }
                        </Col>
                </Form.Group>
            </Container>
    );
}

export default SelectGame;