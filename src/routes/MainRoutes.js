import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameStart from '../pages/GameStart/GameStart';
import GamePage from '../pages/GamePage/GamePage';
import GameEnd from '../pages/GameEnd/GameEnd';
import NotFound from '../pages/NotFound/NotFound';

const MainRoutes = () => (
        <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => <GameStart/>}/>
            <Route exact path={`${process.env.PUBLIC_URL}/game`} render={() => <GamePage/>}/>
            <Route exact path={`${process.env.PUBLIC_URL}/finish`} render={() => <GameEnd/>}/>
            <Route exact path='*' render={() => <NotFound/>}/>
        </Switch>
);

export default MainRoutes;
