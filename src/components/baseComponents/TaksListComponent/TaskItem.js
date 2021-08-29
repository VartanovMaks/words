import React, { useEffect, useState } from 'react';
import {Button,ListGroup} from 'react-bootstrap';


function TaskItem({index, item, selectedTaskIndexes, propsHoisting}) {
    const [isSelected, setIsSelected] = useState(false);
    
    useEffect(() => {

        let foundedIndex = selectedTaskIndexes.findIndex(item => Number(item) === index);

        if (foundedIndex > -1) setIsSelected(true)
        else setIsSelected(false)
        
    },[selectedTaskIndexes]);

    function onSelectItem ({target}){
        setIsSelected(!isSelected);
        propsHoisting(target.id);
    }
      
    return (
        <div className="task-item" key={index}>
            <Button variant={index % 2 ? "outline-info":"outline-secondary"} 
                    id={index} 
                    onClick={onSelectItem}
                    className={isSelected && "btn btn-warning"}
            >
               { !isSelected ? "Select" : "Selected"}
            </Button>
            <ListGroup.Item action  variant={index % 2 ? "info":"secondary"}>
                <h5 className="my-0">Задание: {item.task}</h5>
                <p className="my-0"> Фраза : {item.words.join(' ')}</p>
            </ListGroup.Item>
        </div>
    );
}

export default TaskItem;