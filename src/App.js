import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';
import './css/login.css'

import Timeline from './components/timeline/Timeline'
import Login from './components/login/Login';

function verifica(nextStage, replace) {
  console.log('qwpokeqewkopqweokppqkwekqw');
}


function App() {
  return (
    <div id="root">
        <Router>
          <Switch>
            <Route path="/timeline" component={Timeline} onEnter={verifica} />
            <Route path="" component={Login} />
          </Switch>
        </Router>
    </div> 
  );
}


export default App;
