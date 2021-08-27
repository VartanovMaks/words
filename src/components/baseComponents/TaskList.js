import React, {useEffect, useState} from 'react';
import {Container, Button,ListGroup, Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

function TaskList() {

    const [tasks, setTasks]=useState([]);
    const [counter, setCounter]= useState(0);

    const [selectedTaskIndexes, setSelectedTaskIndexes]=useState([]);

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

  const onSaveGame = () =>{
    prompt (" записываем игру");
  }

  const onButtonClick = (e) => {
      let taskIndex=Number(e.target.id);
      let index = selectedTaskIndexes.findIndex(item => item === taskIndex);
      if (index > -1){
          let arr = selectedTaskIndexes;
          arr.splice(index, 1);
          setSelectedTaskIndexes(arr);
          e.target.innerText = "Select";
          const tmpStyle={...e.target.style, backgroundColor:"#FFFFFF" }
          e.target.style=tmpStyle;
          setCounter(prev=>prev-1);
        } else {
            let arr = selectedTaskIndexes;
            if (selectedTaskIndexes.length > 11 ) {
                return
            }
            arr.push(taskIndex);
            setSelectedTaskIndexes(arr);
            setCounter(prev=>prev+1);
            e.target.innerText = "Selected"
            e.target.style.backgroundColor="#12EE5B";
        }
  }

    return (
        <Container>
        <Row className="justify-content-md-start">
            <Button variant="info" className="my-1 mx-3" onClick={onSaveGame}>Записать игру</Button>
            <h5>Выбрано {counter} заданий</h5>
        </Row>
        <Row className="justify-content-sm-center mt-2">
            <ListGroup className="tasks-list">
                {tasks.map((item,index)=>(
                    <div className="task-item" key={index}>
                        <Button variant={index % 2 ? "outline-info":"outline-secondary"} id={index} onClick={onButtonClick}>Select</Button>
                    <ListGroup.Item action  variant={index % 2 ? "info":"secondary"}>
                        <h5 className="my-0">Задание: {item.task}</h5>
                        <p className="my-0"> Фраза : {item.words.join(' ')}</p>
                    </ListGroup.Item>
                    </div>
                ))}
            </ListGroup>
        </Row>
        </Container>
    );
}

export default TaskList;