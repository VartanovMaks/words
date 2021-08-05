import React, {useContext} from 'react';
import {GameContext} from './ContextComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Words() {
    
    const {
        openedWordsIndexes,
        selectedTaskIndex,
        tasksArray,
        openWord
    } = useContext(GameContext);
    
    function isWordOpened(word) {
        let index = tasksArray[selectedTaskIndex].words.findIndex(item => item === word);
        if (openedWordsIndexes.includes(index)) return true;
        return false;
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                {
                    tasksArray[selectedTaskIndex].words.map((item, index) =>
                         {let isOpened= isWordOpened(item); 
                            return (
                            <Col xs={12} sm={6} md={6} lg={4}>
                            <div className={isOpened ? "opened-word":"word"} 
                                id={`Word${index}`} 
                                onClick={()=>openWord(index)} 
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

export default Words;