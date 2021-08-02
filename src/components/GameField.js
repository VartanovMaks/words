import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Word from './word';

function GameField({task}) {
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                {
                    task.map((item, index) => <Word word={`Слово ${index+1}`} key={Math.random()}/>)
                }   
            </Row>
        </Container>
    );
}

export default GameField;