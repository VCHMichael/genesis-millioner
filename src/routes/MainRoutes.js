import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameStart from '../pages/GameStart/GameStart';
import GamePage from '../pages/GamePage/GamePage';
import GameEnd from '../pages/GameEnd/GameEnd';
import NotFound from '../pages/NotFound/NotFound';

const MainRoutes = () => (
        <Switch>
            <Route exact path='/' render={() => <GameStart/>}/>
            <Route exact path='/game' render={() => <GamePage/>}/>
            <Route exact path='/finish' render={() => <GameEnd/>}/>
            <Route exact path='*' render={() => <NotFound/>}/>
        </Switch>
);

export default MainRoutes;
