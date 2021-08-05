import React from 'react';
import GameControl from './GameControl';
import SelectTask from './SelectTask';
import Words from './Words';

function Body(props) {

    return (
        <div>
            <SelectTask/>
            <Words/>
            <GameControl/>
        </div>
    );
}

export default Body;