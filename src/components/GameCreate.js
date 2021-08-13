import React, {useRef} from 'react';
import {Container,InputGroup, Button, FormControl } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function GameCreate() {

const taskInput=useRef();

function taskParse(){
    let str = taskInput.current.value.toLowerCase().match(/[а-яА-Я]+/gi)
    console.log(str);
}

    return (
            <Container>
                <Row className="justify-content-sm-center">
                    <InputGroup className="mb-3">
                        <Button variant="info" id="button-addon1" onClick={taskParse}>
                          Записать
                        </Button>
                        <FormControl
                          aria-label="Example text with button addon"
                          aria-describedby="basic-addon1"
                          ref={taskInput}
                        />
                    </InputGroup>
                </Row>  
            </Container>
    );
}

export default GameCreate;