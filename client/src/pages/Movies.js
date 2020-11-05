import React from 'react'
import './Movies.scss'
import { useQuery } from '@apollo/client'
import Loader from '../components/Loader';
import GET_MOVIES from '../helpers/queries/getMovies'
import { Image, Row } from 'antd';
import { Link } from 'react-router-dom';



export default function Movies({ match }) {
  console.log(match.params)

  const { loading: new_arrival_loading, error: new_arrival_error, data: new_arrival } = useQuery(GET_MOVIES);
  if (new_arrival_loading) {
    return <Loader />
  }
  return (
    <div className="movies-container">
      <div className="movieList-heading">
        <p>Movies</p>
      </div>
      <div className="movieList-container">
        {
          <Row>
            {
              new_arrival.newMovies.map(movie => {
                return (
                  <Link to={"/info/"+movie.id} >
                    <div className="movie-card">
                      <Image preview={false} width={210} height={300} src={movie.poster_path} />
                      <div className="movie-meta">
                        <p className="movie-title">{movie.title}</p>
                        <p className="movie-score">{movie.vote_average}</p>
                      </div>
                    </div>
                  </Link>
                  
                  
                )
              })
            }
          </Row>
        }
      </div>
    </div>
  )
}
