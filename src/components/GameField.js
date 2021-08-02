import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Word from './word';
import Col from 'react-bootstrap/Col';

function GameField({words}) {
    
    function openWord({target}){
        console.log(target);
        target.className = target.className + ' ' + 'opened-word';
        target.innerText = "opened";
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                {
                    words.map((item, index) => 
                        // <Word word={`Слово ${index+1}`} key={Math.random()}
                        // />
                        <Col xs={12} sm={6} md={6} lg={4} >
                             <div className="word" onClick={openWord}>{item}</div>
                        </Col>
                    )
                }   
            </Row>
        </Container>
    );
}

export default GameField;