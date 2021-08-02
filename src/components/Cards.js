import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards({words}) {
    
    function openWord(word,number){
        const wordCard = document.getElementById(`Word${number+1}`);
        wordCard.className = wordCard.className + ' ' + 'opened-word';
        wordCard.innerText = word;
    }
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                {
                    words.map((item, index) => 
                        <Col xs={12} sm={6} md={6} lg={4} >
                            <div className="word" id={`Word${index+1}`} onClick={()=>openWord(item,index)} key={Math.random()}>
                                 {`Слово ${index+1}`}
                            </div>
                        </Col>
                    )
                }   
            </Row>
        </Container>
    );
}

export default Cards;