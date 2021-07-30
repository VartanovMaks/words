import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import game from '../data'
import Word from './word';

function GameField() {
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                {
                    game[0].words.map((item, index) => <Word word={`Слово ${index+1}`} key={Math.random()}/>)
                }   
            </Row>
        </Container>
    );
}

export default GameField;