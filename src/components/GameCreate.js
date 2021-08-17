import React, {useRef, useState} from 'react';
import {Container,InputGroup, Button, FormControl, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function GameCreate() {

const taskTitleInput=useRef();
const taskInput=useRef();

const [task, setTask] = useState([]);
const [taskTitle, setTaskTitle] = useState('');

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

function taskParse(){
    if(task.length <4){
        alert (`Слов должно быть не меньше 4 и не больше 6`)
        return;
    }
    uploadTask();
    setTask([]);
    setTaskTitle(null);
    taskTitleInput.current.value=null;
    taskInput.current.value=null;
}

function onTaskChange ({target:{value}}) {
    let strArray = value.toLowerCase().match(/[а-яА-Я]+/gi);
    if(strArray && strArray.length < 7 ) setTask(strArray);
}

    return (
            <Container>
                <Row className="justify-content-sm-center">
                    <Form.Label>Впишите заголовок задания</Form.Label>
                    <InputGroup className="mb-3">
                        <FormControl
                        onChange={()=>setTaskTitle(taskTitleInput.current.value)}
                        ref={taskTitleInput}
                        />
                        </InputGroup>
                        <Form.Label>Впишите фразу из 4 - 6 слов</Form.Label>
                        <InputGroup className="mb-3">
                        <FormControl
                          aria-label="Example text with button addon"
                          aria-describedby="basic-addon1"
                          ref={taskInput}
                          onChange={e=>onTaskChange(e)}
                          />
                          <br/>
                    </InputGroup>
                    <Button className="mx-3" variant="info" id="button-addon1" onClick={taskParse} >
                          Записать
                        </Button>
                    <div>
                        <h6>Заголовок : <span className="text-muted">{taskTitle}</span></h6>
                        <h6>Фраза : <span className="text-muted">{task.join(' ')}</span></h6>
                    </div>
                </Row>  
            </Container>
    );
}

export default GameCreate;