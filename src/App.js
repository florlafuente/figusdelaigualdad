import React, { Component } from 'react';
import Album from './components/Album'
import Partido from './components/Partido'
import Resultado from './components/Resultado';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Album} />
          <Route exact path="/partido" component={Partido} />
          <Route exact path="/resultado" component={Resultado} />
        </div>
      </Router>
    );
  }
}

export default App;
