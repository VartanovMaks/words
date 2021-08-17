import React, { useState, useRef} from 'react';
import {Container, Button, Form } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';

function GameCreate() {

const [task, setTask] = useState([]);
const [taskTitle, setTaskTitle] = useState('');

const taskRef = useRef();

const uploadTask = async () => {
    try{
        const taskToUpload = {
            task: taskTitle,
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

function taskParse(e){
    if(task.length <4){
        alert (`Слов должно быть не меньше 4 и не больше 6`)
        return;
    }
    console.log("Событие",e);
    uploadTask();
    setTask([]);
    setTaskTitle('');
    taskRef.current.value=null;
}

function onTaskChange ({target:{value}}) {
    let strArray = value.toLowerCase().match(/[а-яА-Я]+/gi);
    if(strArray && strArray.length < 7 ) setTask(strArray);
}

    return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} sm={10} md={8} lg={7}>
                        <Form.Group className="mb-3" controlId="formTitle">
                          <Form.Label>Введите название вопроса</Form.Label>
                          <Form.Control type="text" size="lg" onChange={e=> setTaskTitle(e.target.value)} value={taskTitle}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formWords"  >
                          <Form.Label>Введите фразу длиной 4 - 6 слов</Form.Label>
                          <Form.Control type="text" size="lg" onChange={e=>onTaskChange(e)} ref={taskRef}/>
                          <Form.Text className="text-muted h4">
                            {!!task.length && <p>{task.join(' ')}</p> }
                          </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e)=>taskParse(e)}>
                          Записать <i class="bi bi-save2"></i>
                        </Button>
                    </Col>
                </Row>  
            </Container>
    );
}

export default GameCreate;