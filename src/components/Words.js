import React, {useContext} from 'react';
import {GameContext} from './ContextComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Word from './Word';

function Words() {
    
    const {
        selectedTaskIndex,
        tasksArray,
    } = useContext(GameContext);
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                {
                    tasksArray[selectedTaskIndex].words.map((item, index) => 
                    <Col xs={12} sm={6} md={6} lg={4} className="my-3">
                        <Word word={item} index={index}/>
                    </Col>
                    )
                }   
            </Row>
        </Container>
    );
}

export default Words;