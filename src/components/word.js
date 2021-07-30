import React from 'react';
import Col from 'react-bootstrap/Col';
import './stylesCards.css';


function openWord({target}){
    console.log(target);
    target.className = target.className + ' ' + 'opened-word';
    target.innerText = "opened";
}

function Word({word}) {
    console.log(word);
    return (
        <Col xs={12} sm={6} md={6} lg={4} >
            <div className="word" onClick={openWord}>{word}</div>
        </Col>
    );
}

export default Word;