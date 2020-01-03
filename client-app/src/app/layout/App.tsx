import React, { Fragment } from 'react';
import './App.css';
import { NavBar } from '../../features/nav/NavBar';
import { HomePage } from '../../features/home/HomePage';
import { Switch, Route } from 'react-router-dom';
import { Blog } from '../../features/blog/Blog';

const App: React.FC = () => {
    return (
        <Fragment>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/blog'>
                    <Blog />
                </Route>
            </Switch>
        </Fragment>
    );
};

export default App;
