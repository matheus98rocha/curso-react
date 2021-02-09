import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/Todo'
import About from '../about/About'
import { Switch } from 'react-router-dom';

export default props => (
    <Router history={hashHistory}>
        <Switch>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
        </Switch>
    </Router>
)