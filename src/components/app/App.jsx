import React from 'react';
import QueensContainer from '../../containers/QueensContainer';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={QueensContainer} />
                {/* Detail page<Route path='/:id' /> */}
            </Switch>
        </Router>
    )
}
