import React, { Component, Suspense, lazy } from 'react';
import { connect, Provider } from 'react-redux';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import compose from 'recompose/compose';
import { createHashHistory } from 'history';

import Main from './component/Main';

const history = createHashHistory({
    basename: process.env.PUBLIC_URL
});
class App extends Component {
    /**
     * ...
     * @ReactRender
     */
    render() {
        // Prints the TMS Label in console.
        const cmp = (
            <>
                
                <Router history={history}>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => <Redirect to="/home" />}
                            />
                            <Route path="/home" component={Main} />
                        </Switch>
                </Router>
            </>
        );

        return cmp;
    }
}
export default compose(
)(App);
