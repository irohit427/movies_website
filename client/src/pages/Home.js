import React from 'react'
import Navbar from '../components/Navbar'
import { useQuery } from '@apollo/client'
import Loader from '../components/Loader';
import CarouselSection from '../components/Carousel'
import Section from '../components/Section'
import GET_MOVIES from '../helpers/queries/getMovies'
import GET_SHOWS from '../helpers/queries/getShows';
import TOP_RATED_MOVIES from '../helpers/queries/topRatedMovies';
import BlogSection from '../components/BlogSection'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer';

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
  }

  return (
    <div className="home">
      <Navbar />
      <CarouselSection />
      <div className="container">
        <Section title="New Arrival" data={new_arrival.newMovies} />
        <Section title="Popular TV Shows" data={popular_shows.newShows} />
        <Section title="Top Rated Movies" data={tr_movies.topRatedMovies} />
        {/* <BlogSection /> */}
        <Newsletter />
      </div>
      <Footer />
    </div>
  )
}

export default Home;