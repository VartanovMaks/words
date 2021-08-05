import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { GameContext } from './ContextComponent';

function Footer() {

    const {
        score
    } = useContext(GameContext);

    return (
            <Container>
                <Row className="justify-content-sm-center">
                    <h5>Вы набрали {score} очков</h5>
                </Row>  
            </Container>
    );
}

export default Footer;