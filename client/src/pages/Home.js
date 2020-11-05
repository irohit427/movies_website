import React from 'react'
import { useQuery } from '@apollo/client'
import Loader from '../components/Loader';
import CarouselSection from '../components/Carousel'
import Section from '../components/Section'
import GET_MOVIES from '../helpers/queries/getMovies'
import GET_SHOWS from '../helpers/queries/getShows';
import TOP_RATED_MOVIES from '../helpers/queries/topRatedMovies';
import BlogSection from '../components/BlogSection'
import Newsletter from '../components/Newsletter'
import './Home.scss'

const Home = () => {
  const { loading: new_arrival_loading, error: new_arrival_error, data: new_arrival } = useQuery(GET_MOVIES);
  const { loading: popular_shows_loading, error: popular_shows_error, data: popular_shows } = useQuery(GET_SHOWS);
  const { loading: tr_movies_loading, error: tr_movies_error, data: tr_movies } = useQuery(TOP_RATED_MOVIES);
  
  if (new_arrival_loading || popular_shows_loading || tr_movies_loading) {
    return <Loader />
  } else{
    console.log(new_arrival)
    console.log(popular_shows)
    console.log(tr_movies)
    console.log(new_arrival_error)
    console.log(popular_shows_error)
    console.log(tr_movies_error)
  }
  
  return (
    <div className="home">
      {/* <Navbar /> */}
      <CarouselSection />
      <div className="container">
        <Section title="New Arrival" data={new_arrival.newMovies} type="movie" />
        <Section title="Popular TV Shows" data={popular_shows.newShows} type="tv" />
        <Section title="Top Rated Movies" data={tr_movies.topRatedMovies} type="movie" />
        <BlogSection />
        <Newsletter />
      </div>
    </div>
  )
}

export default Home;