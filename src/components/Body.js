import React, { useState } from 'react';
import GameControl from './GameControl';
import SelectTask from './SelectTask';
import Cards from './Cards';
import game from '../data';

function Body(props) {
    const [tasks, setTasks] = useState(game);
    const [taskIndex, setTaskIndex] = useState(0);
    
    function categoryChoosen({target}) {
        console.log(target);
        target[target.selectedIndex].disabled = true;
        setTaskIndex(target.selectedIndex);
    }
    
    return (
        <div>
            <SelectTask tasks = {tasks} onSelectTask = {categoryChoosen}/>
            <Cards words={tasks[taskIndex].words} />
            <GameControl/>
        </div>
    );
}

export default Body;