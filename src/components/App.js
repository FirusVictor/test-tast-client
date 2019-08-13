import React from 'react';
import './App.css';
import {Typography} from "@material-ui/core";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Lottery from './Lottery'
import Test from './Test'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Typography variant="h2" color={"primary"} gutterBottom>
                    Test task
                </Typography>
                <Switch>
                    <Route exact path='/' component={Lottery}/>
                    <Route path='/test' component={Test}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
