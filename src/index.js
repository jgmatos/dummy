import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import First from './components/First';
import Second from './components/Second';


import Header from './components/Header';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App/></Header>}/>
            <Route path='/first' render={() => <Header><First/></Header>}/>
            <Route path='/second' render={() => <Header><Second/></Header>}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
