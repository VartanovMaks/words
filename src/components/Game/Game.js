import React, {useContext} from 'react';
import {GameContext} from '../ContextComponent';

import {Form} from 'react-bootstrap'

function Game({game, index}) {
    
    const {
        setTasksArray,
        setOpenedWordsIndexes,
        resetScore,
        games
    } = useContext(GameContext);

    function onSelectGame ({target}) {
        let selectedGameIndex = target.id;
        setTasksArray(games[selectedGameIndex].questions);
        resetScore();
        setOpenedWordsIndexes([]);
    }
    return (
        <Form.Check 
            type="radio"
            label={games[index].name}
            name="radioSelectGame"
            id={index.toString()}
            className="my-3"
            onClick={onSelectGame}
        />
    );
}

export default Game;