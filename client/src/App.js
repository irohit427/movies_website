import React from 'react';
import './App.scss'
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieInfo from './pages/MovieInfo';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/info/:id" component={MovieInfo} /> */}
        </Switch>
      </BrowserRouter>
    </div>
        
  );
}

export default App;
