import React from 'react';
import QueensContainer from '../../containers/QueensContainer';
import QueenDetails from '../../containers/QueenDetails';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={QueensContainer} />
                <Route path='/:id' component={QueenDetails} />
            </Switch>
        </Router>
    )
}
