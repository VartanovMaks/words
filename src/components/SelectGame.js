import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { GameContext } from './ContextComponent';

function SelectGame() {


    return (
            <Container>
                <Row className="justify-content-sm-center">
                    <h3>Выберите игру</h3>
                </Row>
                <Row className="justify-content-sm-center">
                    <p> Новый год 2020</p>
                </Row>
                <Row className="justify-content-sm-center">
                    <p> Ясик август 2021</p>
                </Row>
                <Row className="justify-content-sm-center">
                    <p> Корпоратив декабрь</p>
                </Row>  
            </Container>
    );
}

export default SelectGame;