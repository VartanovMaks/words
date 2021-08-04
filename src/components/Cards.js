import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards({words, openedWordIndexes, wordsCount}) {
    
    function isWordOpened(word) {
        let index = words.findIndex(item => item === word);
        if (openedWordIndexes.includes(index)) return true;
        return false;
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                {
                    words.map((item, index) =>
                         {let isOpened= isWordOpened(item); 
                            return (
                            <Col xs={12} sm={6} md={6} lg={4}>
                            <div className={isOpened ? "opened-word":"word"} 
                                id={`Word${index}`} 
                                onClick={()=>wordsCount(index)} 
                                key={Math.random()}>
                                    {isOpened ? item :`Слово ${index+1}`}
                            </div>
                        </Col>)
                        })
                }   
            </Row>
        </Container>
    );
}

export default Cards;