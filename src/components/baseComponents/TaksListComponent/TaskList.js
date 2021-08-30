import React, {useEffect, useState} from 'react';
import {Container, ListGroup, Row} from 'react-bootstrap';
import TaskItem from './TaskItem';
import SaveGame from './SaveGame';
import {BTN_SELECT} from '../Constants'

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
  
  const onButtonClick = (taskIndex) => {
      let index = selectedTaskIndexes.findIndex(item => item === taskIndex);
      if (index > -1){
          let arr = selectedTaskIndexes;
          arr.splice(index, 1);
          setSelectedTaskIndexes(arr);
          setCounter(prev=>prev-1);
        } else {
            let arr = selectedTaskIndexes;
            if (selectedTaskIndexes.length > 11 ) {
                return
            }
            arr.push(taskIndex);
            setSelectedTaskIndexes(arr);
            setCounter(prev=>prev+1);
        }
  }

  function resetState(){
    
    setSelectedTaskIndexes([]);
    setCounter(0);
  }

    return (
        <Container>
        <Row className="justify-content-md-start">
            <SaveGame 
                tasks={tasks}
                selectedTaskIndexes={selectedTaskIndexes}
                counter={counter} 
                propsHoisting = {resetState}    
            />
        </Row>
        <Row className="justify-content-sm-center mt-2">
            <ListGroup className="tasks-list">
                {tasks.map((item,index)=>
                    <TaskItem 
                        key={index}
                        index={index} 
                        item={item} 
                        selectedTaskIndexes={selectedTaskIndexes}
                        propsHoisting={onButtonClick}
                        btnOptions={BTN_SELECT}
                    />
                )}
            </ListGroup>
        </Row>
        </Container>
    );
}

export default TaskList;