import React from 'react';
import Navbar from './components/Navbar'
import { useQuery } from '@apollo/client'
import './App.scss'
import Loader from './components/Loader';
import CarouselSection from './components/Carousel'
import Section from './components/Section'
import GET_MOVIES from './helpers/queries/getMovies'
import GET_SHOWS from './helpers/queries/getShows';

function App() {
  const { loading: new_arrival_loading, error: new_arrival_error, data: new_arrival } = useQuery(GET_MOVIES);
  const { loading: popular_shows_loading, error: popular_shows_error, data: popular_shows } = useQuery(GET_SHOWS);

  if (new_arrival_loading || popular_shows_loading) {
    return <Loader />
  } else{
    console.log(new_arrival)
  }
  
  return (
    <div className="app">
      <Navbar />
      <CarouselSection />
      <div className="container">
        <Section title="New Arrival" data={new_arrival.newMovies} />
        <Section title="Popular TV Shows" data={popular_shows.newShows} />
      </div>
    </div>
        
  );
}

export default App;
