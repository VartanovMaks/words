import React, {useContext} from 'react';
import {GameContext} from './ContextComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function GameControl() {
    const {
        openAllWords
    } = useContext(GameContext);

    return (
        <div>
            <Container className="my-3">
                <Row className="justify-content-sm-center">
                <Button variant="secondary" size="lg" onClick={openAllWords}>Открыть всё</Button>
                </Row>  
            </Container>
        </div>
    );
}

export default GameControl;