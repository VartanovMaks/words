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
        let index = target.selectedIndex;
        target[index].disabled = true;
        target[index].hidden = true;
        // if all tasks are opened disable further select
        if ( Array.from(target).findIndex(el => el.disabled === false ) === -1) target.disabled=true;
            
        setTaskIndex(index);
    }

    function openWord(word,number){
        console.log(word,' ', number);
        const wordCard = document.getElementById(`Word${number}`);
        wordCard.className = wordCard.className + ' ' + 'opened-word';
        wordCard.innerText = word;
    }

    return (
        <div>
            <SelectTask tasks = {tasks} onSelectTask = {categoryChoosen}/>
            <Cards words={tasks[taskIndex].words} wordsCount = {openWord} />
            <GameControl/>
        </div>
    );
}

export default Body;