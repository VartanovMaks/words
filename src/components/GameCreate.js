import React, {useRef, useState} from 'react';
import {Container,InputGroup, Button, FormControl, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function GameCreate() {

const taskInput=useRef();

const [task, setTask] = useState([]);

const uploadTask = async () => {
    try{
        const taskToUpload = {
            task: 'Any task title',
            words: task
        }
        const response = await fetch('http://localhost:3000/create-task', {
            method: 'POST',
            body: JSON.stringify(taskToUpload),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        let result = await response.json();
        console.log(JSON.stringify(result));
    } catch (error) {
        console.log('Ошибка', error);
    }
  }

function taskParse(){
    if(task.length <4){
        alert (`Слов должно быть не меньше 4 и не больше 6`)
        return;
    }
    uploadTask();
}

function onTaskChange ({target:{value}}) {
    let strArray = value.toLowerCase().match(/[а-яА-Я]+/gi);
    if(strArray && strArray.length < 7 ) setTask(strArray);
}

    return (
            <Container>
                    <Form.Label>Впишите задание из 5 слов</Form.Label>
                <Row className="justify-content-sm-center">
                    <InputGroup className="mb-3">
                        <Button variant="info" id="button-addon1" onClick={taskParse} >
                          Записать
                        </Button>
                        <FormControl
                          aria-label="Example text with button addon"
                          aria-describedby="basic-addon1"
                          ref={taskInput}
                          onChange={e=>onTaskChange(e)}
                        />
                    </InputGroup>
                    <div>
                        <h5>Будет записано : {task.join(' ')}</h5>
                    </div>
                </Row>  
            </Container>
    );
}

export default GameCreate;