import React, {useEffect, useState} from 'react';
import {Container, Button,ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function TaskList() {

    const [tasks, setTasks]=useState([]);
    const [counter, setCounter]= useState(0);

const fetchAllTasks = async () => {
    try{
        const response = await fetch('http://localhost:3000/create-task');
        const result = await response.json(response);
        setTasks(result);

    } catch (error) {
        console.log('Ошибка загрузки заданий', error);
    }
  }

  useEffect(() => {
    fetchAllTasks();
  },[]);

  function onSelectTask (e){
    let taskId = e.target.parentElement.id;
    if (!taskId) taskId = e.target.id
    
    const element = tasks.find(item=>item._id === taskId);
    console.log(element);
    setCounter(prev=>prev+1);
  }

    return (
        <Container>
        <Row className="justify-content-md-start">
            <Button variant="info" className="my-1 mx-3">Записать игру</Button>
            <h5>Выбрано {counter} заданий</h5>
        </Row>
        <Row className="justify-content-sm-center mt-2">
            <ListGroup className="tasks-list">
                {tasks.map((item,index)=>(
                    <ListGroup.Item action variant={index % 2 ? "info":"secondary"} key={item._id} id={item._id} onClick={onSelectTask}>
                        <h5 className="my-0">Задание: {item.task}</h5>
                        <p className="my-0"> Фраза : {item.words.join(' ')}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Row>
        </Container>
    );
}

export default TaskList;