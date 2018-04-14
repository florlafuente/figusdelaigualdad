import React, { Component } from 'react';
import Album from './components/Album';
import Figurita from './components/Figurita';
import {
  BrowserRouter as Router,
  Route,
  Link
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

const AlbumDeFiguritas = () => (
  <div className="Album">
    <Album />
  </div>
)

const Partido = () => (
  <div className="Partido">
    Partido
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Album</Link>
            </li>
            <li>
              <Link to="/partido">Partido</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={AlbumDeFiguritas} />
          <Route exact path="/partido" component={Partido} />
        </div>
      </Router>
    );
  }
}

export default App;
