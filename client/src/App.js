import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss'
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Movies from './pages/Movies';

function App() {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/info/:id" component={MovieInfo} />
          <Route path="/movies" component={Movies} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
        
  );
}

export default App;
