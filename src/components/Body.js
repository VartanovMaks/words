import React, { useState } from 'react';
import GameControl from './GameControl';
import SelectTask from './SelectTask';
import Cards from './Cards';
import game from '../data';

function Body(props) {
    const [tasksArray, setTasksArray] = useState(game);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
    const [openedWordsIndexes, setOpenedWordsIndexes] = useState([]);
    
    function selectTask({target}) {
        let index = target.selectedIndex;
        target[index].disabled = true;  
        target[index].hidden = true;
        // if all tasks are opened disable further select
        if ( Array.from(target).findIndex(el => !el.disabled) === -1) target.disabled=true;
        
        setOpenedWordsIndexes([]);
        setSelectedTaskIndex(index);
    }

    function openWord(number){
        if(!openedWordsIndexes.includes(number)){ 
            const arr = openedWordsIndexes.slice();
            arr.push(number);
            setOpenedWordsIndexes(arr);
        }
    }
    function openAll() {
        let arr = tasksArray[selectedTaskIndex].words.map((item,index) => index);
        let score = tasksArray[selectedTaskIndex].words.length - openedWordsIndexes.length;
        setOpenedWordsIndexes(arr);
        alert(`Очки : ${score}`);
    }

    return (
        <div>
            <SelectTask tasks = {tasksArray} onSelectTask = {selectTask}/>
            <Cards words={tasksArray[selectedTaskIndex].words} openedWordIndexes={openedWordsIndexes} wordsCount = {openWord} />
            <GameControl openAllWords={openAll}/>
        </div>
    );
}

export default Body;