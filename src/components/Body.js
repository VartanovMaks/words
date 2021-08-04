import React, { useState } from 'react';
import GameControl from './GameControl';
import SelectTask from './SelectTask';
import Cards from './Cards';
import game from '../data';

function Body(props) {
    const [tasks, setTasks] = useState(game);
    const [taskIndex, setTaskIndex] = useState(0);
    const [openedWords, setOpenedWords] = useState([]);
    
    function categoryChoosen({target}) {
        let index = target.selectedIndex;
        target[index].disabled = true;
        target[index].hidden = true;
        // if all tasks are opened disable further select
        if ( Array.from(target).findIndex(el => el.disabled === false ) === -1) target.disabled=true;
        
        setOpenedWords([]);
        setTaskIndex(index);
    }

    function openWord(number){
        if(!openedWords.includes(number)){ 
            const arr = openedWords.slice();
            arr.push(number);
            setOpenedWords(arr);
        }
    }
    function openAll() {
        let arr = tasks[taskIndex].words.map((item,index) => index);
        let score = tasks[taskIndex].words.length - openedWords.length;
        setOpenedWords(arr);
        alert(`Очки : ${score}`);
    }

    return (
        <div>
            <SelectTask tasks = {tasks} onSelectTask = {categoryChoosen}/>
            <Cards words={tasks[taskIndex].words} openedWordIndexes={openedWords} wordsCount = {openWord} />
            <GameControl openAllWords={openAll}/>
        </div>
    );
}

export default Body;