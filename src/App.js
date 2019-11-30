import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ZombieList from './components/ZombieList';
import Selector from './components/Selector';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <div>
          <Route path='/:location?' render={({ match }) => (
            <ZombieList location={match.params.location} />
          )} />
          <Selector />
        </div>
      </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
