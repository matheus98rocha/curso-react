import React from 'react';
import { Switch, Route } from 'react-router-dom'

import About from '../../exemples/About';
import Home from '../../exemples/Home';
import Param from '../../exemples/Param';
import NotFound from '../../exemples/NotFound';




import './Content.css'

const Content = props => {
    return (
        <main className="Content">
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/param/:id">
                    <Param />
                </Route>

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}

export default Content;