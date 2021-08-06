import React, {useContext} from 'react';
import {GameContext} from './ContextComponent';
import gamesBase from '../data'

import {Form} from 'react-bootstrap'

function Game({gameName, index}) {
    
    const {
        setTasksArray,
        setOpenedWordsIndexes,
        resetScore
    } = useContext(GameContext);

    function onSelectGame ({target}) {
        let selectedGameIndex = target.id;
        setTasksArray(gamesBase[selectedGameIndex].questions);
        resetScore();
        setOpenedWordsIndexes([]);
    }

    return (
        <Form.Check 
            type="radio"
            label={gameName}
            name="radioSelectGame"
            id={index.toString()}
            className="my-3"
            onClick={onSelectGame}
        />
    );
}

export default Game;