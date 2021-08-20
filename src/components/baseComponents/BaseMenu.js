import React from 'react';
import {Col, Row } from 'react-bootstrap';
import {Link, Switch, Route, Redirect, useRouteMatch} from 'react-router-dom';
import TaskCreate from './TaskCreate';
import TaskList from './TaskList';

function BaseMenu(props) {
    let { path, url } = useRouteMatch();

    return (
        <Row className="justify-content-md-center">
            <Col md={2}>    
            <ul className="my-5 mx-5">
                <li className="my-5">
                  <Link to={`${url}/games-list`}>Список игр</Link>
                </li>
                <li className="my-5">
                  <Link to={`${url}/tasks-list`} >Список заданий</Link>
                </li>
                <li className="my-5">
                  <Link to={`${url}/task-create`} >Записать задание</Link>
                </li>
            </ul>
            </Col>
            <Col md={5}>
                <Switch>
                    <Route exact path={`${path}/games-list`}>
                      <div>games-list </div>    
                    </Route>
                    <Route exact path={`${path}/tasks-list`}>
                      <TaskList />
                    </Route>
                    <Route exact path={`${path}/task-create`}>
                      <TaskCreate />
                    </Route>
                    <Redirect to="/base" />
                </Switch>
            </Col>
        </Row>
    );
}

export default BaseMenu;