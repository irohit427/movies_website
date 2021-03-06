import React from 'react'
import { useQuery } from '@apollo/client'
import MOVIE_INFO from '../helpers/queries/movieInfo';
import Loader from '../components/Loader';
import MovieHeroCard from '../components/MovieHeroCard';
import './MovieInfo.scss'
import { Col, Image, Row } from 'antd';
import Section from '../components/Section';

export default function MovieInfo({match}) {
  const id = match.params.id;
  
  const { loading, error, data: movieInfo } = useQuery(MOVIE_INFO, {
        variables: { id }
  });

  if (loading) return <Loader />

  return (
    <div className="movieInfo-container">
      <MovieHeroCard data={movieInfo.movieInfo}/>
      {
        movieInfo.movieInfo.videos.length > 0 && (
        <div className="trailer-section">
          <div className="movieInfo-heading">
            Trailer
          </div>
          <div className="trailer">
            <iframe title="movie-trailer" width="640" height="400"
              src={movieInfo.movieInfo.videos[0].key} >
            </iframe>
          </div>
        </div>
      )}
      <div className="cast-section">
        <div className="movieInfo-heading">
          Cast
        </div>
        <div className="cast">
          <Row justify="space-between">
          {
            movieInfo.movieInfo.movieCredits.cast.map(
              cast => {
                return(
                    <div className="cast-card">
                      <Row>
                        <Col span={7}>
                          <Image preview={false} width={90} height={120} src={cast.profile_path} />
                        </Col>
                        <Col span={17}>
                          <p className="cast-name">{cast.name}</p>
                          <span className="cast-character">{cast.character}</span>
                        </Col>
                      </Row>
                    </div>
                )
              }
            )
          }
          </Row>
        </div>
      </div>
      {
        movieInfo.movieInfo.similarMovies.length > 0 && (
          <Section title="Recommended" data={movieInfo.movieInfo.similarMovies} type="movie" />
        )
      }
    </div>
  )
}
