import React, { Component } from 'react';
import Album from './components/Album'
import Partido from './components/Partido'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Album</Link>
//         </li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Album} />
//     </div>
//   </Router>
// );



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Album} />
          <Route exact path="/partido" component={Partido} />
        </div>
      </Router>
    );
  }
}

export default App;
