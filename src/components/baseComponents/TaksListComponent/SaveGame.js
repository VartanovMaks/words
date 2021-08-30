import React from 'react';
import {Button} from 'react-bootstrap';

function SaveGame({tasks, selectedTaskIndexes, counter, propsHoisting}) {
    
    const onClickSave = () =>{
        let gameName = prompt ("Введите название игры");
        if (gameName == null) return
        propsHoisting();
    }
    
    return (
        <div>
            <Button variant="info" className="my-1 mx-3" onClick={onClickSave}>Записать игру</Button>
            <h5>Выбрано {counter} заданий</h5>
        </div>
    );
}

export default SaveGame;