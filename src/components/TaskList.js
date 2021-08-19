import React, {useEffect, useState} from 'react';
import {Container,InputGroup, Button, FormControl, Col, ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function TaskList() {

    const [tasks, setTasks]=useState([]);

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

    return (
        <Row className="justify-content-sm-center mt-5">
            <div className="tasks-list">
            <ListGroup>
                {tasks.map((item,index)=>(
                    <ListGroup.Item action variant={index % 2 ? "info":"secondary"}>
                        <h5 className="my-0">Задание: {item.task}</h5>
                        <p className="my-0"> Фраза : {item.words.join(' ')}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
        </Row>
    );
}

export default TaskList;