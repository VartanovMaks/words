import React, {useContext} from 'react';
import {GameContext} from './ContextComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './stylesCards.css'

function SelectTask() {
    const {
        selectTask,
        tasksArray
    } = useContext(GameContext);
    
    return (
        <div>
            <Container>
                <Row className="justify-content-sm-center">
                    <Form.Label>Выбирайте вопрос</Form.Label>
                </Row>
                <Row className="justify-content-sm-center">
                    <Col md="auto" sm="auto">
                        <Form.Group controlId="category">
                            <Form.Control as="select" onChange={selectTask}>
                                {
                                    tasksArray.map((item,index) => <option key={index}>{item.task}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Container >
        </div>
    );
}

export default SelectTask;