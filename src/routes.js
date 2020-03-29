import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AppHome from './container/appHome'

const Routes = () => (
    <Router>
        <>
            <Route exact path="/" component={AppHome} />
        </>
    </Router>
)

export default Routes;