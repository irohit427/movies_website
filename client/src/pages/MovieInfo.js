import React from 'react'
import { useQuery } from '@apollo/client'
import Loader from '../components/Loader';
import MOVIE_INFO from '../helpers/queries/movieInfo';
import Navbar from '../components/Navbar';
import MovieInfoHeroCard from '../components/HeroCard';
import './MovieInfo.scss'
import { Image } from 'antd';

const MovieInfo = ( { match }) => {
  const id = match.params.id;
  const { loading, error, data } = useQuery(MOVIE_INFO, {
    variables: { id }
  });
  
  if (loading) return <Loader />
  
  return (
    <div className="movieInfo">
      <Navbar />
      <MovieInfoHeroCard data={data.movieInfo}/>
      <div className="overview">
        <h1 className="heading">Overview</h1>
        <p>
          {data.movieInfo.overview}
        </p>
      </div>
      {
        data.movieInfo.movieCredits.cast.map(c => {
          return (
            <div>
            <h4>
              {c.name}
            </h4>
            <Image width={200} src={c.profile_path} />
          </div>
          )
        })
      }

    </div>
  )
}

export default MovieInfo