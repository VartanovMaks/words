import React, { useEffect, useState } from 'react';
import {Button,ListGroup} from 'react-bootstrap';


function TaskItem({index, item, selectedTaskIndexes, propsHoisting, btnOptions}) {
    const [isSelected, setIsSelected] = useState(false);
    
    useEffect(() => {
        
            if (!selectedTaskIndexes.lenght) setIsSelected(false)

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
                    className={isSelected && btnOptions.STYLE_SELECTED }
            >
               { isSelected ? btnOptions.MSG_SELECTED : btnOptions.MSG_UNSELECTED}
            </Button>
            <ListGroup.Item action  variant={index % 2 ? "info":"secondary"}>
                <h5 className="my-0">Задание: {item.task}</h5>
                <p className="my-0"> Фраза : {item.words.join(' ')}</p>
            </ListGroup.Item>
        </div>
    );
}

export default TaskItem;