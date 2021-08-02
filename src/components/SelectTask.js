import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import game from '../data';
import GameField from './GameField';

function SelectTask() {
    const [task, setTask] = useState(game[0]);
    
    function categoryChoosen({target}) {
        console.log(target[target.selectedIndex]);
        // target[target.selectedIndex].disabled = true;
        setTask(game[target.selectedIndex]);
    }
   
    return (
        <div>
            <Container>
                <Row className="justify-content-sm-center">
                    <Form.Label>Выбирайте категорию</Form.Label>
                </Row>
                <Row className="justify-content-sm-center">
                    <Col md="auto" sm="auto">
                        <Form.Group controlId="category">
                            <Form.Control as="select" onChange={categoryChoosen}  >
                                {
                                    game.map((item,index) => <option key={index} >{item.category}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Container >
            <GameField task={task.words}/>
        </div>
    );
}

export default SelectTask;