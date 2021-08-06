import React, {useContext} from 'react';
import {GameContext} from './ContextComponent';

function Word ({word,index}) {

    const {
        openedWordsIndexes,
        selectedTaskIndex,
        tasksArray,
        openWord
    } = useContext(GameContext);
    
    function isWordOpened(word) {
        let index = tasksArray[selectedTaskIndex].words.findIndex(item => item === word);
        if (openedWordsIndexes.includes(index)) return true;
        return false;
    }
    
    let isOpened= isWordOpened(word); 

    return (
            <div className={isOpened ? "opened-word":"word"} 
                id={`Word${index}`} 
                onClick={()=>openWord(index)} 
            >
                    {isOpened ? word :`Слово ${index+1}`}
            </div>
    )
    
    
}

export default Word;