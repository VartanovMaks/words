import React from 'react';
import GameControl from './GameControl';
import SelectTask from './SelectTask';

function Body(props) {
    return (
        <div>
            <SelectTask/>
            <GameControl/>
        </div>
    );
}

export default Body;