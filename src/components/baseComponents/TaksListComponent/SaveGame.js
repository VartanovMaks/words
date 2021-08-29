import React, { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';

function SaveGame({tasks, selectedTaskIndexes, counter, propsHoisting}) {
    const [inc, setInc]=useState(0)
    
    const onClickSave = () =>{
        let gameName = prompt ("Введите название игры");
        if (gameName == null) return
        propsHoisting();
      }
      useEffect(()=>setInc(inc=>inc+1),[counter]);
      console.log("rerender SaveGame ", inc);
    return (
        <div>
            <Button variant="info" className="my-1 mx-3" onClick={onClickSave}>Записать игру</Button>
            <h5>Выбрано {counter} заданий</h5>
        </div>
    );
}

export default SaveGame;