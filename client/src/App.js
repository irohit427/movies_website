import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss'
import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';
import TVShowInfo from './pages/TVShowInfo';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/movie/info/:id" component={MovieInfo} />
          <Route path="/tv/info/:id" component={TVShowInfo} />
          <Route path="/movies" component={Movies} />
          <Route path="/tv-shows" component={TVShows} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
        
  );
}

export default App;
