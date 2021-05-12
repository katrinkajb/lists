import React from 'react';
import QueensContainer from '../../containers/QueensContainer';

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
