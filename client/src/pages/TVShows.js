import React from 'react'
import './Movies.scss'
import { useQuery } from '@apollo/client'
import Loader from '../components/Loader';
import GET_SHOWS from '../helpers/queries/getShows'
import { Image, Row } from 'antd';
import { Link } from 'react-router-dom';



export default function Movies({ match }) {
  console.log(match.params)

  const { loading: tv_shows_loading, error: tv_shows_error, data: tv_shows } = useQuery(GET_SHOWS);
  if (tv_shows_loading) {
    return <Loader />
  }
  return (
    <div className="movies-container">
      <div className="movieList-heading">
        <p>TV Shows</p>
      </div>
      <div className="movieList-container">
        {
          <Row>
            {
              tv_shows.newShows.map(show => {
                return (
                  <Link to={"/tv/info/"+show.id} >
                    <div className="movie-card">
                      <Image preview={false} width={210} height={300} src={show.poster_path} />
                      <div className="movie-meta">
                        <p className="movie-title">{show.name}</p>
                        <p className="movie-score">{show.vote_average}</p>
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
