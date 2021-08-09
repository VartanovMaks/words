import React, {useEffect, useContext} from 'react';
import {GameContext} from './ContextComponent';
import {Row,Col, Container, Form} from 'react-bootstrap';
import Game from './Game';

function SelectGame() {

    const {
        games,
        setGames
    } = useContext(GameContext);

    const fetchGames = async () => {
        const response = await fetch('http://localhost:3000/select-game');
        const data = await response.json();
        setGames(data);
      }
    
      useEffect(() => {
        fetchGames();
      },[]);
    
    return (
            <Container>
                <Row className="justify-content-sm-center">
                    <h3>Выберите игру</h3>
                </Row>
                { games.length && (
                <Form.Group as={Row} className="my-3">
                    <Form.Label as="legend" column sm={4} />
                    <Col sm={8}>
                        {
                         games.map((item,index) => {
                            return (<Game index={index} key={index+item.name}/>)
                         })
                        }
                        </Col>
                </Form.Group>)}
            </Container>
    );
}

export default SelectGame;