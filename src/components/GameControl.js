import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function GameControl({openAllWords}) {
    return (
        <div>
            <Container>
                <Row className="justify-content-sm-center">
                <Button variant="secondary" size="lg" onClick={openAllWords}>Открыть всё</Button>
                </Row>  
            </Container>
        </div>
    );
}

export default GameControl;