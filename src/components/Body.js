import React from 'react';
import GameControl from './GameControl';
import GameField from './GameField';
import SelectTask from './SelectTask';

function Body(props) {
    return (
        <div>
            <SelectTask/>
            <GameField/>
            <GameControl/>
        </div>
    );
}

export default Body;