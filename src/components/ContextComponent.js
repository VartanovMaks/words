import React, {createContext, useState} from 'react';
import game from '../data'

export const GameContext = createContext();

const GameContextProvider = ({children}) => {
    
    const [tasksArray, setTasksArray] = useState(game);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
    const [openedWordsIndexes, setOpenedWordsIndexes] = useState([]);
    const [score, setScore] = useState(0);

    function selectTask({target}) {
        let index = target.selectedIndex;
        target[index].disabled = true;  
        target[index].hidden = true;
        // if all tasks are opened disable further select
        if ( Array.from(target).findIndex(el => !el.disabled) === -1) target.disabled=true;
        
        setOpenedWordsIndexes([]);
        setSelectedTaskIndex(index);
    }

    function openWord(index){
        if(!openedWordsIndexes.includes(index)){ 
            const arr = openedWordsIndexes.slice();
            arr.push(index);
            setOpenedWordsIndexes(arr);
        }
    }
   
    function openAllWords() {
        let arr = tasksArray[selectedTaskIndex].words.map((item,index) => index);
        let openedWords = tasksArray[selectedTaskIndex].words.length - openedWordsIndexes.length;
        setOpenedWordsIndexes(arr);
        alert(`Очки : ${openedWords}`);
        setScore(score + openedWords);
    }
    function resetScore (){
        setScore(0);
    }

        return (
        <GameContext.Provider 
        value={{
            tasksArray,
            setTasksArray,
            selectedTaskIndex,
            selectTask,
            openedWordsIndexes,
            openWord,
            openAllWords,
            score,
            resetScore
        }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;